import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1.5px solid #edeff1;
  border-radius: 2px;
  width: 100%;
  padding-left: 0.5em;
  padding-top: 0.5em;
  resize: vertical;
  min-height: 6em;
  max-height: 8em;
  font-family: -apple-system, BlinkMacSystemFont;

  &::placeholder {
    color: #878a8c;
    font-weight: 510;
  }
`;
