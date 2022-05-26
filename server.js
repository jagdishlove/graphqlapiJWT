const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const { connectDB } = require("./db");
const app = express();
const { createJwsToken } = require("./util/auth");
const schema = require("./graphql/schema");
const { authentication } = require("./middleware/auth");

app.use(express.json());
app.use(authentication);

app.get("/authtest", (req, res) => {
  res.json(
    createJwsToken({
      username: "jagdish",
      email: "jaggu@gmail.com",
      displayName: "jagdish mehra",
      password: "12345",
      admin: false,
    })
  );
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port${process.env.PORT}`)
);
