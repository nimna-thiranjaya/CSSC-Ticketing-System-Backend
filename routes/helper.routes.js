const express = require("express");

const HelperRouter = express.Router();

const { GetAllRoutes } = require("../controllers/helper.controller");

HelperRouter.get("/getAllRoutes", GetAllRoutes);

module.exports = HelperRouter;
