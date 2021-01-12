import styled from "styled-components";

export const AuthenticationInput = styled.input`
  height: 3em;
  width: 15em;
  background-color: #fcfcfb;
  border: 1px solid #e2e2e1;
  border-radius: 5px;
  padding-left: 0.5em;
  margin: 0.5em 0 0.5em 0;

  &::placeholder {
    color: #a5a4a4;
    font-weight: 900;
    font-size: 0.8em;
    text-transform: uppercase;
  }
`;
