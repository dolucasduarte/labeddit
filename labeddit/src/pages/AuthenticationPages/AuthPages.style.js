import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled.img`
  height: 4.5em;
  margin: 0 0 0.5em 0;
`;

export const AuthenticationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  button {
    height: 3em;
    width: 15em;
    border: none;
    background-color: #137bd0;
    color: #ffffff;
    border-radius: 5px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 1em 0 2em 0;

    &:hover {
      background-color: #3f79a8;
    }
  }
`;

export const AuthenticationFormTitle = styled.h1`
  color: #242728;
  font-size: 1.7em;
  font-weight: 400;
  text-align: center;

  strong {
    font-weight: 600;
  }
`;

export const AuthenticationCTA = styled.span`
  color: #242728;
  font-weight: 400;
  text-align: center;
  align-self: center;

  a {
    text-decoration: none;
    color: #137bd0;
    font-weight: 700;

    &:hover {
      color: #3f79a8;
    }
  }
`;
