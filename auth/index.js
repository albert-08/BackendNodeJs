const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/errors')

const secret = config.jwt.secret

function sign(data) {
  return jwt.sign(data, secret)
}

function verify(token) {
  return jwt.verify(token, secret)
}

const check = {
  own: function(req, owner) {
    const decoded = decodeHeader(req)
    console.log(decoded)

    if (decoded.id !== owner) {
      throw error('Can not do that', 401)
    }
  },
  logged: function(req) {
    const decoded = decodeHeader(req)
  }
}

function getToken(auth) {
  if(!auth) {
    throw error('Doesn´t have a token', 401)
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw error('Invalid format', 401)
  }

  let token = auth.replace('Bearer ', '')
  return token
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verify(token)

  req.user = decoded

  return decoded
}

module.exports = {
  sign,
  check
}