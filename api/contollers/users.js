const userModel = require("../models/user");
const bcrypt = require("bcrypt");

// Update a user
module.exports.UpdateUser = async function (req, res) {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({
        msg: "Account has been updated",
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
};

//Delete a User
module.exports.DeleteUser = async function (req, res) {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        msg: "Account delete successfully",
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(403).json("You can delete only your account");
  }
};

//Get a user
module.exports.GetUser = async function (req, res) {
  try {
    const user = await userModel.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json({
      other,
      msg: "Get a user information successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Follow a user
module.exports.FollowUser = async function (req, res) {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await userModel.findById(req.params.id);
      const currentUser = await userModel.findById(req.body.userId); // make request to follow user

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.body.userId } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("You already followed this user");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(403).json("You can't follow yourself");
  }
};

//Unfollow a user
module.exports.UnfollowUser = async function (req, res) {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await userModel.findById(req.params.id);
      const currentUser = await userModel.findById(req.body.userId); // make request to unfollow user

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.body.userId } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("You dont followed this user");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(403).json("You can't follow yourself");
  }
};
