import {
  AuthenticationPageContainer,
  FormContainer,
  LogoIcon,
  Title,
  Form
} from "./AuthenticationPages.style";
import {
  UsernameInput,
  EmailInput,
  PasswordInput
} from "../../components/Inputs/AuthenticationInputs";
import useForm from "hooks/useForm";
import { signUp } from "services/post";
import { Link, useHistory } from "react-router-dom";
import logoIcon from "images/logo-icon.svg";
import { Button } from "components/Buttons/Buttons";

function SignUpPage() {
  const history = useHistory();

  const { form, onChange } = useForm({
    email: "",
    username: "",
    password: ""
  });

  const submitSignUp = event => {
    event.preventDefault();
    const body = {
      email: form.email,
      username: form.username,
      password: form.password
    };
    signUp(body, history);
  };

  return (
    <AuthenticationPageContainer>
      <FormContainer>
        <LogoIcon src={logoIcon} alt="Reddit logo icon" />
        <Title>
          <strong>Sign up</strong> and join the community.
        </Title>
        <Form onSubmit={submitSignUp}>
          <UsernameInput onChange={onChange} form={form} />
          <EmailInput onChange={onChange} form={form} />
          <PasswordInput onChange={onChange} form={form} />
          <Button callToAction="Sign Up" />
        </Form>
        <p>
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </FormContainer>
    </AuthenticationPageContainer>
  );
}

export default SignUpPage;
