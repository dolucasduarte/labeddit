import styled from "styled-components";

const CommentFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
  margin-bottom: 2em;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label {
    font-size: 0.8em;
    margin-bottom: 0.7em;
    color: #1c1c1c;
  }
`;

export { CommentFormContainer, Form };
