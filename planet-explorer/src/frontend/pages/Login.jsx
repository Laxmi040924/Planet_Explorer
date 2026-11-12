import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {

  const navigate = useNavigate();

  async function handleLogin(e){
  e.preventDefault();

  const body = {
    email:e.target[0].value,
    password:e.target[1].value
  };

  const res = await fetch("http://localhost:8081/api/auth/login",{
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify(body)
  });

  if(res.ok){
    const user = await res.json();

    localStorage.setItem("loggedInUser", user.email);

    alert("Login Successful 🚀");
    navigate("/quiz");
  }
  else{
    alert("Invalid email or password ❌");
  }
}
 

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>🚀 Welcome Back</h1>

        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email address"required />
          <input type="password" placeholder="Password"  required />

          <button type="submit">Login</button>
        </form>

        <p className="auth-footer">
          New here? <Link to="/signup">Create account</Link>
        </p>

      </div>
    </div>
  );
}
