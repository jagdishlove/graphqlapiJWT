const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || "";

  try {
    const verified = jsw.decode(token, process.env.SECRET);
    req.verifiedUser = verified;
    console.log("verifiedUser", verified);
    next();
  } catch {
    console.log("varification failed");
  }
  next();
};

module.exports = { authentication };
