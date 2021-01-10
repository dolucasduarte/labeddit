import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  width: 100%;
  height: 8vh;
  position: sticky;
  top: 0;
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
  }

  div span {
    font-size: 0.8em;
    font-weight: 500;
  }

  div span a {
    font-style: normal;
    text-decoration: none;
    color: #a8aaab;

    &:hover {
      cursor: pointer;
      color: #797b7c;
    }
  }
`;
