import {
  AuthenticationPageContainer,
  FormContainer,
  LogoIcon,
  Title,
  Form
} from "./AuthenticationPages.style";
import {
  EmailInput,
  PasswordInput
} from "components/Inputs/AuthenticationInputs";
import useForm from "hooks/useForm";
import { signIn } from "services/post";
import { Link, useHistory } from "react-router-dom";
import logoIcon from "images/logo-icon.svg";
import { Button } from "components/Buttons/Buttons";

function SignInPage() {
  const history = useHistory();

  const { form, onChange } = useForm({
    email: "",
    password: ""
  });

  const submitSignIn = event => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    signIn(body, history);
  };

  return (
    <AuthenticationPageContainer>
      <FormContainer>
        <LogoIcon src={logoIcon} alt="Reddit logo icon" />
        <Title>
          Welcome back! <strong>Sign in</strong>.
        </Title>
        <Form onSubmit={submitSignIn}>
          <EmailInput onChange={onChange} form={form} />
          <PasswordInput onChange={onChange} form={form} />
          <Button callToAction="Sign In" />
        </Form>
        <p>
          New here? <Link to="/signup">Sign up</Link>
        </p>
      </FormContainer>
    </AuthenticationPageContainer>
  );
}

export default SignInPage;
