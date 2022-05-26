const jwt = require("jsonwebtoken");

const createJwsToken = (user) => {
  return jwt.sign(user, process.env.SECRET, {
    expiresIn: "1h",
  });
};

module.exports = { createJwsToken };
