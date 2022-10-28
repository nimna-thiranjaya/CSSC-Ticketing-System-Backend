const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();
const { connectDB } = require("./utils/connection");

const UserRouter = require("./routes/user.routes");
const HelperRouter = require("./routes/helper.routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user/", UserRouter);
app.use("/api/helper/", HelperRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT : ${PORT}`);
  connectDB();
});
