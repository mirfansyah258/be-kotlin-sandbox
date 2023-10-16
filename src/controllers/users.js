require('dotenv').config()
const moment = require("moment")
const { v4: uuidv4 } = require('uuid');

const { users } = require("../models");
const { myres } = require("../utils");

const response = {}

response.login = async (req, res) => {
  let { username, password } = req.body;
  if (username && password) {
    try {
      const user = await users.findOne({ where: { username, password } })
  
      if (user) {
        let token = uuidv4()
        await users.update({ token }, { where: { id: user.id } })
        let data = {
          ...user.toJSON(),
          token
        }
        res.send(myres.success(data));
      } else {
        res.status(400).send(myres.bad_request('Username or Password is invalid'))
      }
    } catch (err) {
      res.status(500).send(myres.server_error(err.errors));
    }
  } else {
    res.status(400).send(myres.bad_request('Username and Password is required'))
  }
}

// middleware
// check session token
response.checkToken = async (req, res, next) => {
  let raw_token = req.headers.authorization || ''
  let token = raw_token.split(' ')[1]
  let user
  try {
    user = await users.findOne({
      where: { token },
    });

    if (user == null) return res.status(401).send(myres.unauth());
  } catch (err) {
    res.status(500).send(err.message);
  }

  res.user = user
  next()
}

module.exports = response