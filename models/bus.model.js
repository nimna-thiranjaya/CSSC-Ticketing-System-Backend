const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
      trim: true,
    },

    sheetCount: {
      type: Number,
      required: true,
    },

    route: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    driver: {
      type: String,
      required: true,
    },
    busInspectorStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
