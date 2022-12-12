//IMPORTS
require("dotenv").config();
const express = require("express");
// const axios = require("axios");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

const { PORT, CONNECTION_STRING } = process.env;
console.log({ PORT, CONNECTION_STRING });

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  app.set("db", {
    sequelize,
  });

  //APP LISTEN
  app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
  });
});
