import { useState } from "react";
import { useHistory } from "react-router";

import "./index.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response?.status === 200) {
      history.push("/home");
      alert("Login Successful!!");
    } else {
      alert("Username or password is incorrect");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <main className="main-form">
        <section className="form-text">
          <h2>Login</h2>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </section>
        <section className="form-data">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <fieldset>
              <label htmlFor="email">
                <span> Email</span>
                <input
                  name="email"
                  value={email}
                  type="email"
                  required={true}
                  aria-required={true}
                  aria-label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label htmlFor="password">
                <span>Password</span>
                <input
                  name="password"
                  value={password}
                  type="password"
                  aria-required={true}
                  required={true}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button
                disabled={email.length <= 0 || password.length <= 0}
                type="submit"
                tabIndex={0}
                onClick={handleLoginSubmit}
                style={
                  email.length <= 0 || password.length <= 0
                    ? null
                    : { cursor: "pointer" }
                }
              >
                Login
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
