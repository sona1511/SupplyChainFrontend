import "./../App.css";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <h4>Supply Chain Management</h4>
      <ul className="navlink">
        
        <Link className='navStyle' to="/">
          <li>Home</li>
        </Link>
        <Link className='navStyle' to="/chooseactor">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
