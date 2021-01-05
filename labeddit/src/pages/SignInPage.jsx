import { Link } from "react-router-dom";
import logoIcon from "../images/logo-icon.svg";
import { AuthPageContainer } from "../styles/authPages";
import { EmailInput, PasswordInput } from "../components/Inputs";

function SignInPage() {
  return (
    <AuthPageContainer>
      <form>
        <img src={logoIcon} alt="Reddit logo icon" />
        <h1>
          Welcome back! <strong>Sign in</strong>.
        </h1>
        <EmailInput />
        <PasswordInput />
        <button>Sign in</button>
      </form>
      <span>
        New here? <Link to="/signup">Sign up</Link>
      </span>
    </AuthPageContainer>
  );
}

export default SignInPage;
