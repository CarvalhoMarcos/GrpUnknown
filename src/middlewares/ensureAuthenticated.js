const { verify } = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = function ensureAuthenticated(req, res, next) {
  // Validacao do token JWT

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json("JWT token is missing");
  }
  // Bearer aaskdlfjlksfad

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    req.id = sub;
    
    return next();
  } catch (err) {
    return res.status(401).json("Invalid JWT Token");
  }
};
