const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");

const UserRegister = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      nic,
      passportNo,
      country,
      userExpDate,
      route,
      role,
    } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (role == "Admin") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          role: role,
        };
        const newAdmin = await User.create(data);
        if (newAdmin) {
          res
            .status(200)
            .send({ status: true, message: "Admin registered successfully" });
        } else {
          res
            .status(400)
            .send({ status: false, message: "Admin registration failed" });
        }
      } else if (role == "LocalPassenger") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          totalCredit: 0.0,
          role: role,
        };
        const newLocalPassenger = await User.create(data);
        if (newLocalPassenger) {
          let data = {
            userID: newLocalPassenger._id,
          };
          let stringData = JSON.stringify(data);

          QRCode.toDataURL(stringData, function (err, GenaratedQR) {
            if (err) {
              console.log("error occurred in QR code generation");
            } else {
              User.findByIdAndUpdate(
                newLocalPassenger._id,
                { smartCard: GenaratedQR },
                { new: true },
                (err, updatedUser) => {
                  if (err) {
                    res.status(400).send({
                      status: false,
                      message: "Local Passenger registration failed",
                    });
                  } else {
                    res.status(200).send({
                      status: true,
                      message: "Local Passenger registered successfully",
                    });
                  }
                }
              );
            }
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Local Passenger registration failed",
          });
        }
      } else if (role == "ForeignPassenger") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          passportNo: passportNo,
          password: hashedPassword,
          totalCredit: 0,
          country: country,
          userExpDate: userExpDate,
          role: role,
        };
        const newForeignPassenger = await User.create(data);
        if (newForeignPassenger) {
          let data = {
            userID: newForeignPassenger._id,
          };
          let stringData = JSON.stringify(data);

          QRCode.toDataURL(stringData, function (err, GenaratedQR) {
            if (err) {
              console.log("error occurred in QR code generation");
            } else {
              User.findByIdAndUpdate(
                newForeignPassenger._id,
                { smartCard: GenaratedQR },
                { new: true },
                (err, updatedUser) => {
                  if (err) {
                    res.status(400).send({
                      status: false,
                      message: "Foreign Passenger registration failed",
                    });
                  } else {
                    res.status(200).send({
                      status: true,
                      message: "Foreign Passenger registered successfully",
                    });
                  }
                }
              );
            }
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Foreign Passenger registration failed",
          });
        }
      } else if (role == "Inspector") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          route: route,
          role: role,
        };
        const newInspector = await User.create(data);
        if (newInspector) {
          res.status(200).send({
            status: true,
            message: "Inspector registered successfully",
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Inspector registration failed",
          });
        }
      } else {
        return res.status(400).send({ status: false, message: "Invalid Role" });
      }
    } else {
      return res
        .status(400)
        .send({ status: false, message: "User already exists" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { UserRegister };
