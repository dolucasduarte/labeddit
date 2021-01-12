import styled from "styled-components";

<<<<<<< HEAD:labeddit/src/components/Header/Header.style.js
const StyledHeader = styled.header`
  z-index: 2;
  top: 0;
  position: sticky;

  box-sizing: border-box;
  height: 4em;
  width: 100vw;

  background-color: #ffffff;
  padding-left: 2em;
  padding-right: 2em;
=======
export const HeaderContainer = styled.header`
  top: 0;
  position: sticky;
  width: 100vw;
  height: 4em;
  background-color: #ffffff;
  margin-bottom: 2em;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/styles/components/navbar.js

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    :hover {
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  height: 2em;
`;

const ProfileContainer = styled.div`
  display: flex;
<<<<<<< HEAD:labeddit/src/components/Header/Header.style.js
=======
  margin-right: 2em;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/styles/components/navbar.js

  img {
    height: 1.6em;
    margin-right: 0.5em;
  }

  div {
    height: 1.6em;
    font-size: 0.8em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    font-style: normal;
    text-decoration: none;
    color: #a8aaab;

    &:hover {
      color: #797b7c;
    }
  }
`;

export { StyledHeader, Logo, ProfileContainer };
