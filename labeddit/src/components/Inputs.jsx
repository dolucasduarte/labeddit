function NicknameInput() {
  return (
    <input
      id="nickname"
      name="nickname"
      type="text"
      placeholder="Nickname"
      required
    />
  );
}

function EmailInput() {
  return (
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Email"
      minLength="5"
      required
    />
  );
}

function PasswordInput() {
  return (
    <input
      id="password"
      name="password"
      type="password"
      placeholder="Password"
      minLength="6"
      required
    />
  );
}

export { NicknameInput, PasswordInput, EmailInput };
