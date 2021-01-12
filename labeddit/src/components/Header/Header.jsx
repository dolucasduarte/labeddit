import { StyledHeader, Logo, ProfileContainer } from "./Header.style";
import { Link } from "react-router-dom";
import logo from "images/logo.svg";
import profileIcon from "images/profile-icon.svg";

function Header() {
  const username = localStorage.getItem("username");

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Labeddit" />
      </Link>
      <ProfileContainer>
        <img src={profileIcon} alt={`${username} profile`} />
        <div>
          <span>{username}</span>
          <Link to="/login" onClick={() => signOut()}>
            Logout
          </Link>
        </div>
      </ProfileContainer>
    </StyledHeader>
  );
}

export default Header;
