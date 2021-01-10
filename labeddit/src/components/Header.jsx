import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  ProfileContainer
} from "../styles/components/header";
import logo from "../images/logo.svg";
import profileIcon from "../images/profile-icon.svg";

function Header() {
  const username = localStorage.getItem("username");

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}

export default Header;
