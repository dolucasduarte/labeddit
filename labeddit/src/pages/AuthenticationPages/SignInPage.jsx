import {
  PageContainer,
  LogoIcon,
  AuthenticationForm,
  AuthenticationFormTitle,
  AuthenticationCTA
} from "./AuthPages.style";
import {
  EmailInput,
  PasswordInput
} from "../../components/Inputs/AuthenticationInputs";
import useForm from "../../hooks/useForm";
import { signIn } from "../../services/post";
import { Link, useHistory } from "react-router-dom";
import logoIcon from "../../images/logo-icon.svg";

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
    <PageContainer>
      <LogoIcon src={logoIcon} alt="Reddit logo icon" />
      <AuthenticationFormTitle>
        Welcome back! <strong>Sign in</strong>.
      </AuthenticationFormTitle>
      <AuthenticationForm onSubmit={submitSignIn}>
        <EmailInput onChange={onChange} form={form} />
        <PasswordInput onChange={onChange} form={form} />
        <button>Sign in</button>
      </AuthenticationForm>
      <AuthenticationCTA>
        New here? <Link to="/signup">Sign up</Link>
      </AuthenticationCTA>
    </PageContainer>
  );
}

export default SignInPage;
