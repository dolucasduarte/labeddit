import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  position: sticky;
  width: 100vw;
  height: 4em;
  background-color: #ffffff;
  margin-bottom: 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Logo = styled.img`
  height: 2em;
  margin-left: 2em;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-right: 2em;

  img {
    height: 1.6em;
    margin-right: 0.5em;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.6em;
    font-size: 0.8em;
    font-weight: 500;
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
