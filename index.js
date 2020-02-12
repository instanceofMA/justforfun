const dep = require("./my-dependency.px");
module.exports = (req, res) => {
  dep(`Request Body: ${req.body}`);
  res.send("Request body printed.");
}
