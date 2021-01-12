import styled, { css } from "styled-components";

const VotingBarContainer = styled.div`
  min-width: 2.5em;

  background-color: #f8f9fa;
  border-radius: 0.5em 0 0 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props =>
    props.pathname !== `/` &&
    css`
      background: #ffff;
    `}
`;

const VotingIcon = styled.img`
  height: 1em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  padding: 0.5em;

  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;

export { VotingBarContainer, VotingIcon };
