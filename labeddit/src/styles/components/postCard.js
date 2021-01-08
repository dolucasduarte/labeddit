import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 40em;
  min-height: 10em;
  border-radius: 0.5em 0.5em 0.5em 0.5em;
  border: 1px solid #cccccc;
  margin-top: 1em;

  @media (max-width: 500px) {
    width: 100vw;
    align-self: center;
  }

  &:hover {
    border: 1px solid #898989;
    cursor: pointer;
  }
`;

export const VotingBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  min-width: 2.5em;
  border-radius: 0.5em 0 0 0.5em;
  border: none;

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
  padding-left: 1em;
  padding-right: 0.5em;
  border-radius: 0 0.5em 0.5em 0;
  border: none;

  h3 {
    font-weight: 600;
    margin-bottom: 0;
  }

  p {
    font-weight: 300;
  }
`;

export const PostInfo = styled.div`
  margin-top: 0.7em;
  color: #787c7e;
  font-weight: 300;
  font-size: 0.8em;
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.2em;
  margin-bottom: 0.5em;

  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }

  img {
    height: 0.8em;
    margin-right: 0.5em;
  }

  figcaption {
    color: #878a8c;
    font-weight: 600;
    font-size: 0.8em;

    &:hover {
      cursor: pointer;
    }
  }
`;
