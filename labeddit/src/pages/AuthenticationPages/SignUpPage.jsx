import {
  PageContainer,
  LogoIcon,
  AuthenticationForm,
  AuthenticationFormTitle,
  AuthenticationCTA
} from "./AuthPages.style";
import {
  UsernameInput,
  EmailInput,
  PasswordInput
} from "../../components/Inputs/AuthenticationInputs";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/post";
import { Link, useHistory } from "react-router-dom";
import logoIcon from "../../images/logo-icon.svg";

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
    <PageContainer>
      <LogoIcon src={logoIcon} alt="Reddit logo icon" />
      <AuthenticationFormTitle>
        <strong>Sign up</strong> and join the community.
      </AuthenticationFormTitle>
      <AuthenticationForm onSubmit={submitSignUp}>
        <UsernameInput onChange={onChange} form={form} />
        <EmailInput onChange={onChange} form={form} />
        <PasswordInput onChange={onChange} form={form} />
        <button>Sign up</button>
      </AuthenticationForm>
      <AuthenticationCTA>
        Already registered? <Link to="/login">Sign in</Link>
      </AuthenticationCTA>
    </PageContainer>
  );
}

export default SignUpPage;
