const express = require("express");
const UserRouter = express.Router();

const { UserRegister } = require("../controllers/user.controller");

UserRouter.post("/userRegister", UserRegister);

module.exports = UserRouter;
