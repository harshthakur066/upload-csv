const express = require("express");

const Upload = require("../models/Upload");

const router = express.Router();

// To get all csv data
router.get("/api/v1/upload", async (req, res) => {
  try {
    const set = await Upload.find();
    res.json(set);
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

// To post a csv data
router.post("/api/v1/upload", async (req, res) => {
  const { columns, data } = req.body;
  try {
    const set = new Upload({
      columns,
      data,
    });
    await set.save();
    res.json(set);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// To delete a csv data
router.delete("/api/v1/upload/:uploadId", async (req, res) => {
  const { uploadId } = req.params;
  try {
    const set = await Upload.findByIdAndDelete(uploadId);
    res.json(set);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
