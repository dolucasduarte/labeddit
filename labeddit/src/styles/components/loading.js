import styled from "styled-components";
import { heartbeat } from "../keyframes";

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
