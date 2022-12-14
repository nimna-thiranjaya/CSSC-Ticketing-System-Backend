const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    nic: {
      type: String,
      trim: true,
    },
    passportNo: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
    },
    smartCard: {
      type: String,
    },
    totalCredit: {
      type: Number,
    },
    userExpDate: {
      type: Date,
    },
    route: {
      type: Number,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    accountStatus: {
      type: String,
      default: "Active",
      required: true,
    },
    busID: {
      type: String,
      trim: true,
    },
    tokens: [{ type: Object }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
