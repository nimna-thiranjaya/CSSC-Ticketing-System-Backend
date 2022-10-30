const mongoose = require("mongoose");

const busStateTempSchema = new mongoose.Schema({
  busId: {
    type: String,
    required: true,
  },
  busState: {
    type: String,
    required: true,
  },
});
