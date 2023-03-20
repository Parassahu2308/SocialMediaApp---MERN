const userRouters = require("express").Router();
const { RegisterUser, LoginUser } = require("../auth");
const {
  UpdateUser,
  DeleteUser,
  GetUser,
  FollowUser,
  UnfollowUser,
} = require("../contollers/users");

//Register
userRouters.route("/register").post(RegisterUser);

//Login
userRouters.route("/login").post(LoginUser);

//Update a user
userRouters.route("/:id").put(UpdateUser);

//Delete a user
userRouters.route("/:id").delete(DeleteUser);

//Get a User
userRouters.route("/:id").get(GetUser);

//Follow a user
userRouters.route("/:id/follow").put(FollowUser);

//Unfollow a user
userRouters.route("/:id/unfollow").put(UnfollowUser);

module.exports = userRouters;
