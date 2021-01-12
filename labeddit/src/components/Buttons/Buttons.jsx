import { StyledButton } from "./Buttons.style";

function Button({ callToAction, type }) {
  return <StyledButton type={type}>{callToAction}</StyledButton>;
}

export { Button };
