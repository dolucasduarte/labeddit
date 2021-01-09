import styled from "styled-components";

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2em;
  margin-bottom: 2em;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  label {
    font-size: 0.7em;
    margin-bottom: 0.7em;
    color: #1c1c1c;
  }

  textarea {
    border: 1.5px solid #edeff1;
    border-radius: 2px;
    width: 100%;
    padding-left: 0.5em;
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
      cursor: pointer;
    }
  }
`;
