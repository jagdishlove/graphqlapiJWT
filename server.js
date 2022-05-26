const express = require("express");
const { graphQLHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const app = express();

// const schema = require("./schema");

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
