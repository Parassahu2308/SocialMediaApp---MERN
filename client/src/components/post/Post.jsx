import { MoreVert } from "@mui/icons-material";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImage"
            />
            <span className="postUsername">Paras Sahu</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey, it's my first post</span>
          <img className="postImage" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">12 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">2 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
