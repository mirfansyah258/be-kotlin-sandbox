require('dotenv').config()
const moment = require("moment")
const { testing } = require("../models");
const { myres } = require("../utils");

const response = {}

response.getData = async (req, res) => {
  try {
    const test = await testing.findAll();

    res.send(myres.success(test));
  } catch (err) {
    res.status(500).send(myres.server_error(err.errors));
  }
}

response.getDataById = async (req, res) => {
  res.send(myres.success(res.test))
}

response.insertData = async (req, res) => {
  let { nama, email, telepon } = req.body;
  try {
    const test = await testing.create({ nama, email, telepon });

    res.status(201).send(myres.created(test));
  } catch (err) {
    res.status(400).send(myres.bad_request(err.errors));
  }
}

response.updateData = async (req, res) => {
  let id = req.params.id
  let { nama, email, telepon } = req.body;
  try {
    const user = await testing.update({ nama, email, telepon }, {
      where: { id }
    });

    res.status(200).send(myres.success(req.body));
  } catch (err) {
    // res.status(400).send(myres.bad_request(err.errors));
    res.status(400).send({ err: JSON.stringify(err) })
  }
}

response.deleteData = async (req, res) => {
  let id = req.params.id
  try {
    await testing.destroy({ where: { id } });

    res.status(200).send(myres.success());
  } catch (err) {
    res.status(400).send(myres.bad_request(err));
  }
}

// middleware
// check if nik is exist based on nik
response.checkId = async (req, res, next) => {
  let id = req.params.id
  let test
  try {
    test = await testing.findOne({
      where: { id },
      // attributes: { exclude: ['password', 'token', 'firebaseId'] }
    });

    if (test == null) return res.status(404).send(myres.not_found('Cannot find data'));
  } catch (err) {
    res.status(500).send(err.message);
  }

  res.test = test
  next()
}

module.exports = response