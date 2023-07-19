import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="users_pgs">
          <div className="usercard">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <h2>Users</h2>
          </Link>
          </div>
          <div className="usercard">
          <Link to="/pgs" style={{ textDecoration: "none" }}>
          <h2>Pgs</h2>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
