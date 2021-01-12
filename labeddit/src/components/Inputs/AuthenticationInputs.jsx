import { AuthenticationInput } from "./Inputs.style";
import blockSpace from "utils/blockSpace";

function UsernameInput({ form, onChange }) {
  return (
    <AuthenticationInput
      id="username"
      name="username"
      type="text"
      placeholder="Nickname"
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
