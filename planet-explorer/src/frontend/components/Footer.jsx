import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h3 className="footer-title">Planet Explorer</h3>
          <p className="footer-text">
            Explore planets, moons, and fascinating space facts through an
            interactive learning experience.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/planets">Planets</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/3d-space">3D Space</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Planet Explorer | Laxmi Choudhary
      </div>
    </footer>
  );
};

export default Footer;
