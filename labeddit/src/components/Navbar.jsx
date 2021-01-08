import { Link } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  ProfileContainer
} from "../styles/components/navbar";
import logo from "../images/logo.svg";
import profileIcon from "../images/profile-icon.svg";

function Navbar() {
  const username = localStorage.getItem("username");

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src={logo} alt="Labeddit logo" />
      </Link>
      <ProfileContainer>
        <img src={profileIcon} alt="Profile icon" />
        <div>
          <span>{username}</span>
          <span>
            <Link to="/login" onClick={() => signOut()}>
              Logout
            </Link>
          </span>
        </div>
      </ProfileContainer>
    </NavbarContainer>
  );
}

export default Navbar;
