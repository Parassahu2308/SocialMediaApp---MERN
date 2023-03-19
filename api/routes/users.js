const userRouters = require("express").Router();
const { RegisterUser, LoginUser } = require("../contollers/auth");

//Register
userRouters.route("/register").post(RegisterUser);

//Login
userRouters.route("/login").post(LoginUser);

module.exports = userRouters;
