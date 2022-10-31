const mongoose = require("mongoose");

const UserTravelSchema = new mongoose.Schema(
  {
    passengerID: {
      type: String,
      required: true,
    },
    busID: {
      type: String,
      required: true,
    },
    routeNo: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    getOnHoltID: {
      type: Number,
      required: true,
    },
    getOffHoltID: {
      type: Number,
      required: true,
    },
    getOffHoltName: {
      type: String,
      required: true,
    },
    getOnHoltName: {
      type: String,
      required: true,
    },
    getOnTime: {
      type: String,
      required: true,
    },
    getOffTime: {
      type: String,
      required: true,
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
