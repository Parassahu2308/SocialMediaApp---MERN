const userModel = require("../models/user");
const bcrypt = require("bcrypt");

//Register
module.exports.RegisterUser = async function (req, res) {
  console.log("work");
  try {
    // Generate Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashesPassword = await bcrypt.hash(req.body.password, salt);

    // Generate user
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hashesPassword,
    });

    // User will be saved
    const user = await newUser.save();

    // Response
    res.status(200).json({
      user,
      msg: "User register Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Login
module.exports.LoginUser = async function (req, res) {
  try {
    // Check email is present or not
    const user = await userModel.findOne({ email: req.body.email });
    !user && res.status(404).json("Enter a valid email");

    // check Password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(404).json("Enter a valid password");

    //Response
    res.status(200).json({
      user,
      msg: "User login Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
