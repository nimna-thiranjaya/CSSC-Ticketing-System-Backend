const Bus = require("../models/bus.model");
const RegisterBus = async (req, res) => {
  try {
    const { busNumber, sheetCount, route, phoneNo, driver } = req.body;

    const busCheck = await Bus.findOne({ busNumber });
    if (!busCheck) {
      const data = {
        busNumber,
        sheetCount,
        route,
        phoneNo,
        driver,
      };

      const newBus = await Bus.create(data);
      if (newBus) {
        return res
          .status(200)
          .send({ status: true, message: "Bus registered" });
      } else {
        return res.status(400).send({
          satus: false,
          message: "Somthing went wrong in bus register",
        });
      }
    } else {
      return res
        .status(400)
        .send({ status: false, message: "Bus Already Registered" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const UpdateBus = async (req, res) => {
  try {
    const BusID = req.params.busID;
    const { sheetCount, route, phoneNo, driver } = req.body;

    const newdata = {
      sheetCount,
      route,
      phoneNo,
      driver,
    };
    await Bus.findByIdAndUpdate(BusID, newdata);

    return res.status(200).send({ status: true, message: "Bus Updated" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const DeleteBus = async (req, res) => {
  try {
    const BusID = req.params.busID;
    await Bus.findByIdAndDelete(BusID);
    return res.status(200).send({ status: true, message: "Bus Deleted" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    return res.status(200).send({ status: true, data: buses });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetOneBus = async (req, res) => {
  try {
    const BusID = req.params.busID;
    const bus = await Bus.findById(BusID);
    return res.status(200).send({ status: true, busDetails: bus });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetAllBusesByRoute = async (req, res) => {
  try {
    const routeNo = req.params.routeNo;
    const buses = await Bus.find({ route: routeNo, busInspectorStatus: false });
    return res.status(200).send({ status: true, buses: buses });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = {
  RegisterBus,
  UpdateBus,
  DeleteBus,
  GetAllBuses,
  GetOneBus,
  GetAllBusesByRoute,
};
