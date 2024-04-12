const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/OnTap")
  .then(() => {
    console.log("Connect Mongodb Successsfully");
  })
  .catch((err) => {
    console.log("Fail connect Mongodb" + err);
  });

module.exports = { mongoose };
