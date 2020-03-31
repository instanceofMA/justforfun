const dep = require("./my-dependency.js");
const fs = require("fs").promises;

module.exports = async (req, res) => {
  dep(`Request Body: ${req.body}`);
  const file = await fs.readFile("./index.js");
  console.log(file.toString("utf-8"));
  res.json({message: "Here is the file.", file: file.toString("utf-8")});

}
