import "./navbar.scss";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link style={{ textDecoration: "none" }} to="/">
          <span>CubSocial</span>
        </Link>
        <DarkModeOutlinedIcon />
        <HomeOutlinedIcon />
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="user-icon"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
