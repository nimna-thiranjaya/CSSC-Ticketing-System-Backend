const express = require("express");
const UserRouter = express.Router();
const UserAuth = require("../middlewares/user.middleware");

const {
  UserRegister,
  UserLogin,
  UserLogout,
  UserProfile,
} = require("../controllers/user.controller");

UserRouter.post("/userRegister", UserRegister);
UserRouter.post("/userLogin", UserLogin);
UserRouter.get("/userLogout", UserLogout);
UserRouter.get("/profile", UserProfile, UserAuth);
module.exports = UserRouter;
