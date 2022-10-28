const express = require("express");
const UserRouter = express.Router();
const userAuth = require("../middlewares/user.middleware");

const {
  UserRegister,
  UserLogin,
  UserLogout,
  UserProfile,
  GetOneUser,
  UpdateUser,
  DeleteUserProfile,
  GetAllPassengers,
  GetAllInspector,
  DeleteUserById,
} = require("../controllers/user.controller");

UserRouter.post("/userRegister", UserRegister);
UserRouter.post("/userLogin", UserLogin);
UserRouter.get("/userLogout", userAuth, UserLogout);
UserRouter.get("/profile", userAuth, UserProfile);
UserRouter.get("/getOneUser/:id", GetOneUser);
UserRouter.patch("/updateUser", userAuth, UpdateUser);
UserRouter.delete("/deleteUser", userAuth, DeleteUserProfile);
UserRouter.get("/getAllPassengers", GetAllPassengers);
UserRouter.get("/getAllInspector", GetAllInspector);
UserRouter.delete("/deleteUserById/:id", DeleteUserById);

module.exports = UserRouter;
