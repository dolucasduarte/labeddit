import styled from "styled-components";

const PostDetailsContainer = styled.main`
  max-width: 40em;

  background: #ffff;
  border: 1px solid #cccccc;
  border-radius: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;

  @media (max-width: 500px) {
    width: 90vw;
    align-self: center;
  }
`;

export { PostDetailsContainer };
