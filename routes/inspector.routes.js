const express = require("express");
const InspectorRouter = express.Router();

const { ChangeBusState } = require("../controllers/inspector.controller");
const userAuth = require("../middlewares/user.middleware");

InspectorRouter.post("/changeBusState", userAuth, ChangeBusState);

module.exports = InspectorRouter;
