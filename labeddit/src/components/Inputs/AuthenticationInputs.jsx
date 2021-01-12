<<<<<<< HEAD:labeddit/src/components/Inputs/AuthenticationInputs.jsx
import { AuthenticationInput } from "./Inputs.style";
import blockSpace from "utils/blockSpace";
=======
import blockSpace from "../../utils/blockSpace";
import { AuthenticationInput } from "./AuthenticationInputs.style";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/components/Inputs.jsx

function UsernameInput({ form, onChange }) {
  return (
    <AuthenticationInput
      id="username"
      name="username"
      type="text"
      placeholder="Nickname"
<<<<<<< HEAD:labeddit/src/components/Inputs/AuthenticationInputs.jsx
=======
      onKeyDown={blockSpace}
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/components/Inputs.jsx
      onChange={onChange}
      value={form.username}
      required
    />
  );
}

function EmailInput({ form, onChange }) {
  return (
    <AuthenticationInput
      id="email"
      name="email"
      type="email"
      placeholder="Email"
      minLength="5"
      onKeyDown={blockSpace}
      onChange={onChange}
      value={form.email}
      required
    />
  );
}

function PasswordInput({ form, onChange }) {
  return (
    <AuthenticationInput
      id="password"
      name="password"
      type="password"
      placeholder="Password"
      minLength="6"
      onKeyDown={blockSpace}
      onChange={onChange}
      value={form.password}
      required
    />
  );
}

export { UsernameInput, EmailInput, PasswordInput };
