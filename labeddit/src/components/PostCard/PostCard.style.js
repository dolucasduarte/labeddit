import styled, { css } from "styled-components";

const PostCardContainer = styled.div`
  width: 40em;
  min-height: 10em;

  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 0.5em;
  display: flex;

  margin-top: 1em;

  &:hover {
    border: 1px solid #898989;
    cursor: pointer;
  }

  ${props =>
    props.pathname !== "/" &&
    css`
      margin-top: 0;
      border: none;
      &:hover {
        border: none;
      }
    `}

  @media (max-width: 500px) {
    width: 90vw;
    align-self: center;
  }
`;

const PostContentContainer = styled.div`
  position: relative;
  width: 100%;

  border: none;
  padding: 0.5em 1em 0em 1em;

  display: flex;
  flex-direction: column;

  time {
    color: #787c7e;
    font-weight: 300;
    font-size: 0.8em;
  }

  h3 {
    font-weight: 600;
    line-height: 1.3em;
  }

  article {
    font-weight: 300;
    margin-bottom: 3em;
    line-height: 1.5em;
    word-wrap: break-word;
  }
`;

const CommentsCounterContainer = styled.div`
  position: absolute;
  bottom: 0;

  margin-bottom: 0.5em;

  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.2em;

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
  }

  &:hover {
    cursor: pointer;
  }
`;

export { PostCardContainer, PostContentContainer, CommentsCounterContainer };
