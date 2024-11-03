import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (
      username &&
      password &&
      localStorage.getItem("username") === username &&
      localStorage.getItem("password") === password
    ) {
      navigate("/");
    } else {
      alert("please provide valid and matching username and password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleLogin}>Submit</button>
      </div>
      <p>
        Don't have an account yet?{" "}
        <Link to={"/auth/register"}>create your own one today!</Link>
      </p>
    </div>
  );
}
