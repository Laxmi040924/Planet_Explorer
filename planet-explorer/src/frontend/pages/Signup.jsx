import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {

  const navigate = useNavigate();

 async function handleSignup(e){
  e.preventDefault();

  const user = {
    fullName:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value
  };

  const res = await fetch("http://localhost:8081/api/auth/signup", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify(user)
  });

  if(res.ok){
    alert("Signup successful 🎉 Please login now");
    navigate("/login");
  }else{
    alert("Signup failed");
  }
}

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>🌌 Join Planet Explorer</h1>

        <form className="auth-form" onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name"  required  />
          <input type="email" placeholder="Email address"  required />
          <input type="password" placeholder="Password"  required />
          <input type="password" placeholder="Confirm Password"  required />

          <button type="submit">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}
