import styled from "styled-components";
import { heartbeat } from "../../styles/keyframes";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;

  img {
    height: 3em;
    animation: ${heartbeat} 1s infinite;
  }
`;

export { LoadingContainer };
