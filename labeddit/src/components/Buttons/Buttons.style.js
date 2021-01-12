import styled from "styled-components";

const StyledButton = styled.button`
  height: 2.5em;
  width: ${props => (props.type === "small" ? "6em" : "90%")};

  border: none;
  background: #137bd0;
  border-radius: 5px;

  color: #ffffff;
  font-weight: 900;
  text-transform: uppercase;

  margin-top: 0.5em;
  margin-bottom: 1em;
  align-self: ${props => props.type === "small" && "flex-end"};

  &:hover {
    background-color: #3f79a8;
  }
`;

export { StyledButton };
