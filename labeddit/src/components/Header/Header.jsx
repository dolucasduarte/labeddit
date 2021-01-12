<<<<<<< HEAD
import { StyledHeader, Logo, ProfileContainer } from "./Header.style";
import { Link } from "react-router-dom";
import logo from "images/logo.svg";
import profileIcon from "images/profile-icon.svg";
=======
import { HeaderContainer, Logo, ProfileContainer } from "./Header.style";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profileIcon from "../../images/profile-icon.svg";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0

function Header() {
  const username = localStorage.getItem("username");

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
<<<<<<< HEAD
    <StyledHeader>
=======
    <HeaderContainer>
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
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
<<<<<<< HEAD
    </StyledHeader>
=======
    </HeaderContainer>
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
  );
}

export default Header;
