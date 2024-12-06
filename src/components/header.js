import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";
import defUser from "../img/users/default.jpg";
import classes from "./header.module.css";
function Header() {
  return (
    <>
      <div className={classes.head}>
        <p className={classes.title}>
          <Link to="/">All Tours</Link>
        </p>
        <img src={logo} alt="Logo" className={classes.logo} />
        <nav>
          <p className={classes.login}>
            <Link to="#">Login</Link>
          </p>
          <button className={classes.signup}>
            <a href="#">Sign Up</a>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
