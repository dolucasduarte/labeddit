import styled from "styled-components";
import { keyframes } from "styled-components";

const heartbeat = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;

  img {
    height: 3em;
    animation: ${heartbeat} 1s infinite;
  }

  span {
    color: #ff4500;
    font-weight: 600;
    font-size: 0.8em;
    margin-top: 1em;
    text-align: center;
    animation: ${heartbeat} 1s infinite;
  }
`;
