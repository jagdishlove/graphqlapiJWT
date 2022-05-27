const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const { connectDB } = require("./db");
const app = express();

app.use(express.json());

const schema = require("./graphql/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port${process.env.PORT}`)
);
connectDB();
