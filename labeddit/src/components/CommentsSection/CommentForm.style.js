import styled from "styled-components";

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label {
    font-size: 0.7em;
    margin-bottom: 0.7em;
    color: #1c1c1c;
  }
`;
