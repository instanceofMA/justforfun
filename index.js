const dep = require("./my-dependency.js");
module.exports = (req, res) => {
  depend(`Request Body: ${req.body}`);
  res.send("Request body printed.");
}
