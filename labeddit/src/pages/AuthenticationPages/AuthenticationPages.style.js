import styled from "styled-components";

const AuthenticationPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 20em;

  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 2em;
  padding-bottom: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #242728;
    font-weight: 400;
    text-align: center;
    margin-top: 0.8em;
  }

  a {
    text-decoration: none;
    color: #137bd0;
    font-weight: 700;

    &:hover {
      color: #3f79a8;
    }
  }

  @media (max-width: 500px) {
    width: 80vw;
    align-self: center;
  }
`;

const LogoIcon = styled.img`
  height: 4.5em;
  margin-bottom: 0.5em;
`;

const Title = styled.h1`
  color: #242728;
  font-size: 1.7em;
  font-weight: 400;
  text-align: center;

  strong {
    font-weight: 600;
  }
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { AuthenticationPageContainer, FormContainer, LogoIcon, Title, Form };
