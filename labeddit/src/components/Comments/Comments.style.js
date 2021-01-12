import styled from "styled-components";

const CommentsSectionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentCard = styled.div`
  width: 90%;

  border-top: 1px solid #efeeee;
  padding-top: 0.5em;

  margin-bottom: 2em;

  strong {
    color: #1c1c1c;
    font-style: normal;
    font-weight: 600;
    font-size: 0.9em;
    margin-right: 0.3em;
  }

  time {
    color: #7c7c7c;
    font-size: 0.8em;
  }

  article {
    box-sizing: border-box;
    padding: 0.6em;
    color: #1a1a1b;
    margin-top: 0.5em;
    font-size: 0.9em;
    line-height: 1.5em;
    word-wrap: break-word;
  }
`;

export { CommentsSectionContainer, CommentCard };
