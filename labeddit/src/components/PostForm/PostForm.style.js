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
  margin-bottom: 2em;

  @media (max-width: 500px) {
    width: 100vw;
    align-self: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  h4 {
    font-weight: 400;
    color: #1c1c1c;
    align-self: flex-start;
  }
`;
