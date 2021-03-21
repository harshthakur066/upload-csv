const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  columns: [
    {
      type: Object,
    },
  ],
  data: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("Upload", uploadSchema);
