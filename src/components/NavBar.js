import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Navbar.css";

export default function NavBar() {
  // deve arrivare dal backend se e´ loggato o no l'utente TODO
  const {isLogged} = useAuthContext();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link className="navbar-list-link home-title" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-list-item">
          <div className="login-register-wrapper">
            {isLogged ? (
              <>
                <Link className="navbar-list-link link" to="/dashboard">
                  My page
                </Link>
                <Link className="navbar-list-link link" to="/login">
                  logout
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar-list-link link" to="/login">
                  Login
                </Link>
                <Link className="navbar-list-link link" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
