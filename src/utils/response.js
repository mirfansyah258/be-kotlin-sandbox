// functions custom response API
const pjson = require('../../package')
const myres = {}

function obj(code, message, data = {}) {
  res = code >= 400 ? 'errors' : 'data'
  return { code, message, [res]: data, version: pjson.version };
}

myres.success = (data) => {
  return obj(200, "success", data)
}

myres.created = (data) => {
  return obj(201, "created", data)
}

myres.bad_request = (data, msg = "bad_request") => {
  return obj(400, msg, data)
}

myres.unauth = () => {
  return obj(401, "unauthorized")
}

myres.not_allowed = () => {
  return obj(403, "not_allowed")
}

myres.not_found = (data) => {
  return obj(404, "not_found", { message: data })
}

myres.server_error = (data) => {
  return obj(500, "server_error", data)
}

module.exports = myres