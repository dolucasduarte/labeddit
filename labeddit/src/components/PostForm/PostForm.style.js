import styled from "styled-components";

<<<<<<< HEAD
const PostFormContainer = styled.div`
  width: 40em;
  min-height: 15em;

  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 1em;
  padding-bottom: 1em;

=======
export const PostFormContainer = styled.div`
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD

  margin-top: 2em;
  margin-bottom: 2em;

  @media (max-width: 500px) {
    width: 90vw;
=======
  width: 40em;
  height: 40vh;
  background-color: #ffffff;
  border-radius: 0.5em;
  margin-bottom: 2em;

  @media (max-width: 500px) {
    width: 100vw;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
    align-self: center;
  }
`;

<<<<<<< HEAD
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
=======
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
  width: 90%;

  h4 {
    font-weight: 400;
    color: #1c1c1c;
<<<<<<< HEAD
  }
`;

export { PostFormContainer, Form };
=======
    align-self: flex-start;
  }
`;
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
