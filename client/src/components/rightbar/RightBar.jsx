import "./RightBar.css";
const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Paras Sahu</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Paras Sahu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Paras Sahu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Paras Sahu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Paras Sahu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
