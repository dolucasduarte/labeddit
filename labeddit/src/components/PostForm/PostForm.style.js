import styled from "styled-components";

const PostFormContainer = styled.div`
  width: 40em;
  min-height: 15em;

  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 1em;
  padding-bottom: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
  margin-bottom: 2em;

  @media (max-width: 500px) {
    width: 90vw;
    align-self: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;

  h4 {
    font-weight: 400;
    color: #1c1c1c;
  }
`;

export { PostFormContainer, Form };
