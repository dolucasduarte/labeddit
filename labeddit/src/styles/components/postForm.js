import styled from "styled-components";

export const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40em;
  height: 40vh;
  background-color: #ffffff;
  border-radius: 0.5em;
  margin: 5em 0 2em 0;

  @media (max-width: 500px) {
    width: 100vw;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  h4 {
    font-weight: 400;
    color: #1c1c1c;
    align-self: flex-start;
  }

  input {
    border: 1.5px solid #edeff1;
    border-radius: 2px;
    height: 2em;
    width: 100%;
    padding-left: 1em;
    margin-bottom: 1em;

    &::placeholder {
      color: #c0c1c2;
      font-weight: 510;
    }
  }

  textarea {
    border: 1.5px solid #edeff1;
    border-radius: 2px;
    width: 100%;
    padding-left: 1em;
    padding-top: 0.5em;
    resize: vertical;
    min-height: 6em;
    max-height: 8em;
    font-family: Arial;

    &::placeholder {
      color: #878a8c;
      font-weight: 510;
    }
  }

  button {
    height: 2.5em;
    width: 6em;
    background-color: #137bd0;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 1em;
    align-self: flex-end;

    &:hover {
      background-color: #3996da;
    }
  }
`;
