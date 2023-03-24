import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImage"
                src="/assets/person/5.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Paras Sahu</h4>
              <span className="profileInfoDesc">Welcome my profile!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
