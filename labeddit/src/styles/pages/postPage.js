import styled from "styled-components";

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40em;
  background: #ffff;
  @media (max-width: 500px) {
    width: 100vw;
    align-self: center;
  }
`;
