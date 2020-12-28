import React from "react";
import Input from "./input";

function Login() {
  return (
    <div>
      <form action="" method="POST">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <input
          className="form-cont"
          id="login"
          type="submit"
          value="Login"
          name="login-btn"
        />
      </form>
    </div>
  );
}
export default Login;
