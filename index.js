const dep = require("./my-dependency");
module.exports = (req, res) => {
  dep(`Request Body: ${req.body}`);
  res.send("Request body printed.");
}
