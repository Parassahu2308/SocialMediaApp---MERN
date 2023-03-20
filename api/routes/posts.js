const {
  CreatePost,
  UpdatePost,
  DeletePost,
  LikePost,
  GetPost,
  TimelinePost,
} = require("../contollers/posts");

const postRouters = require("express").Router();

//Create a Post
postRouters.route("/").post(CreatePost);

//Update a Post
postRouters.route("/:id").put(UpdatePost);

//Delete a Post
postRouters.route("/:id").delete(DeletePost);

//Like/Dislike a Post
postRouters.route("/:id/like").put(LikePost);

//Get a Post
postRouters.route("/:id").get(GetPost);

//Get timeline Post
postRouters.route("/timeline/all").get(TimelinePost);

module.exports = postRouters;
