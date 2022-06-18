import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo" style={{ color: "white" }}>
            Electronic shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul className="Home_link">
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/Cart">
              <img src="./empty-cart.png" alt="ra" style={{ height: "20px" }} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
