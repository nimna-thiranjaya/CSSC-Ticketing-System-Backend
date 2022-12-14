const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();
const { connectDB } = require("./utils/connection");

const UserRouter = require("./routes/user.routes");
const HelperRouter = require("./routes/helper.routes");
const BusRouter = require("./routes/bus.routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user/", UserRouter);
app.use("/api/helper/", HelperRouter);
app.use("/api/bus/", BusRouter);

app.get("/", (req, res) => {
  try {
    return res.redirect("https://backend-server.netlify.app/");
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT : ${PORT}`);
  connectDB();
});
