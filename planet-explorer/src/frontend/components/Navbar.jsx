import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">Planet Explorer</div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/3d-space">3D Space</Link>
        <Link to="/quiz">Quiz</Link>

        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
}
