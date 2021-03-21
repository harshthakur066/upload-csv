const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  columns: [
    {
      type: String,
    },
  ],
  data: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Upload", uploadSchema);
