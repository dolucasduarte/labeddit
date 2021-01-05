import styled from "styled-components";

export const AuthPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f6f7f8 0%, #f6f6f6 100%);

  img {
    height: 4.5em;
    margin: 0 0 0.5em 0;
  }

  h1 {
    color: #242728;
    font-size: 1.7em;
    font-weight: 400;
    text-align: center;
  }

  h1 strong {
    font-weight: 600;
  }

  form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  }

  input {
    height: 3em;
    width: 15em;
    background-color: #fcfcfb;
    border: 1px solid #e2e2e1;
    border-radius: 5px;
    padding-left: 0.5em;
    margin: 0.5em 0 0.5em 0;

    &::placeholder {
      color: #a5a4a4;
      font-weight: 900;
      font-size: 0.8em;
      text-transform: uppercase;
    }
  }

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

  span {
    color: #242728;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: #137bd0;
    font-weight: 700;
  }

  a:hover {
    color: #3f79a8;
  }
`;