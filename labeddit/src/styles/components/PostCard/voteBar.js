import styled, { css } from "styled-components";

export const VotingBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  min-width: 2.5em;
  border-radius: 0.5em 0 0 0.5em;
  border: none;

  ${props =>
    props.pathname === `/${props.id}` &&
    css`
      background: #ffff;
    `}

  img {
    height: 1em;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
    padding: 0.5em;

    &:hover {
      cursor: pointer;
      background-color: #e8e8e8;
    }
  }
`;
