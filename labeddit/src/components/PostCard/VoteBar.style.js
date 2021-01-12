import styled, { css } from "styled-components";

<<<<<<< HEAD
const VotingBarContainer = styled.div`
  min-width: 2.5em;

  background-color: #f8f9fa;
  border-radius: 0.5em 0 0 0.5em;

=======
export const VotingBarContainer = styled.div`
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
=======
  min-width: 2.5em;
  background-color: #f8f9fa;
  border-radius: 0.5em 0 0 0.5em;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0

  ${props =>
    props.pathname !== `/` &&
    css`
      background: #ffff;
    `}
<<<<<<< HEAD
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
=======

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
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
