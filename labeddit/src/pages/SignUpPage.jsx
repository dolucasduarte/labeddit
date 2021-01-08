import { Link, useHistory } from "react-router-dom";
import { AuthPageContainer } from "../styles/pages/authenticationPages";
import logoIcon from "../images/logo-icon.svg";
import { UsernameInput, EmailInput, PasswordInput } from "../components/Inputs";
import useForm from "../hooks/useForm";
import { signUp } from "../services/post";

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
    <AuthPageContainer>
      <form onSubmit={submitSignUp}>
        <img src={logoIcon} alt="Reddit logo icon" />
        <h1>
          <strong>Sign up</strong> and join the community.
        </h1>
        <UsernameInput onChange={onChange} form={form} />
        <EmailInput onChange={onChange} form={form} />
        <PasswordInput onChange={onChange} form={form} />
        <button>Sign Up</button>
      </form>
      <span>
        Already registered? <Link to="/login">Sign in</Link>
      </span>
    </AuthPageContainer>
  );
}

export default SignUpPage;
