import styled from "styled-components";

const AuthenticationInput = styled.input`
  box-sizing: border-box;
  height: 3em;
  width: 90%;

  border: 1px solid #edeff1;
  border-radius: 3px;
  padding-left: 0.5em;

  margin-top: 0.5em;
  margin-bottom: 0.5em;

  &::placeholder {
    color: #a5a4a4;
    font-weight: 900;
    font-size: 0.9em;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 2.5em;
  width: 100%;

  border: 1px solid #edeff1;
  border-radius: 2px;
  padding-left: 0.5em;

  margin-bottom: 1em;

  &::placeholder {
    color: #a5a4a4;
    font-weight: 500;
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  min-height: 6em;
  max-height: 8em;
  width: 100%;
  resize: vertical;

  border: 1px solid #edeff1;
  border-radius: 2px;
  padding-left: 0.5em;
  padding-top: 0.5em;

  font-family: -apple-system, BlinkMacSystemFont;

  margin-bottom: 0.5em;

  &::placeholder {
    color: #a5a4a4;
    font-weight: 500;
  }
`;

export { AuthenticationInput, Input, TextArea };
