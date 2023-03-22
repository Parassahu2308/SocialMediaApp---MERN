import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
