import Online from "../online/Online";
import "./RightBar.css";
import { Users } from "../../dummyData";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Paras Sahu</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Jhansi</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Sadar</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImage"
              src="/assets/person/6.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Paras Sahu</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
