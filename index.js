require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.APP_PORT || 6666

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/router');

// middleware 
app.use(cors());
app.use(express.json());
app.use('/', appRoute);

app.listen(port, () => {
  console.log(`Server Running : http://localhost:${port}`);
});