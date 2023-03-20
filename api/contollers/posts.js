const postModels = require("../models/post");
const userModels = require("../models/user");

//Create a Post
module.exports.CreatePost = async function (req, res) {
  const newPost = new postModels(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
  }
};

//Update a Post
module.exports.UpdatePost = async function (req, res) {
  try {
    const post = await postModels.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await postModels.updateOne({ $set: req.body });
      res.status(200).json("Post updated successfully");
    } else {
      res.status(403).json("You can update only your post");
    }
  } catch (err) {
    console.log(err);
  }
};

//Delete a Post
module.exports.DeletePost = async function (req, res) {
  try {
    const post = await postModels.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await postModels.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("You can delete only your post");
    }
  } catch (err) {
    console.log(err);
  }
};

//Like/Dislike a Post
module.exports.LikePost = async function (req, res) {
  try {
    const post = await postModels.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("you liked a post");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("you unliked a post");
    }
  } catch (err) {
    console.log(err);
  }
};

//Get a Post
module.exports.GetPost = async function (req, res) {
  try {
    const post = await postModels.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};

//Get timeline Post
module.exports.TimelinePost = async function (req, res) {
  try {
    const currentUser = await userModels.findById(req.body.userId);
    const userPosts = await postModels.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return postModels.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    console.log(err);
  }
};
