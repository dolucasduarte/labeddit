import { Link, useHistory } from "react-router-dom";
import logoIcon from "../images/logo-icon.svg";
import { AuthPageContainer } from "../styles/pages/authPages";
import { EmailInput, PasswordInput } from "../components/Inputs";
import useForm from "../hooks/useForm";
import { signIn } from "../services/post";

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
    <AuthPageContainer>
      <form onSubmit={submitSignIn}>
        <img src={logoIcon} alt="Reddit logo icon" />
        <h1>
          Welcome back! <strong>Sign in</strong>.
        </h1>
        <EmailInput onChange={onChange} form={form} />
        <PasswordInput onChange={onChange} form={form} />
        <button>Sign in</button>
      </form>
      <span>
        New here? <Link to="/signup">Sign up</Link>
      </span>
    </AuthPageContainer>
  );
}

export default SignInPage;
