import {Link} from 'react-router-dom'
import logoIcon from "../images/logo-icon.svg";
import {AuthPageContainer} from '../styles/authPages'
import { NicknameInput, EmailInput, PasswordInput } from "../components/Inputs";


function SignUpPage() {
  return (
    <AuthPageContainer>
      <form>
        <img src={logoIcon} alt="Reddit logo icon" />
        <h1>
          <strong>Sign up</strong> and join the community.
        </h1>
        <NicknameInput />
        <EmailInput />
        <PasswordInput />
        <button>Sign Up</button>
      </form>
      <span>
        Already a Labedditor? <Link to="/login">Sign in</Link>
      </span>
    </AuthPageContainer>
  );
}

export default SignUpPage;
