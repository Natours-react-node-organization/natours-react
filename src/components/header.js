import logo from "../img/logo-white.png";
import defUser from "../img/users/default.jpg";
import classes from "./header.module.css";
function Header() {
  return (
    <>
      <div className={classes.head}>
        <p className={classes.title}>
          <a href="#">All Tours</a>
        </p>
        <img src={logo} alt="Logo" className={classes.logo} />
        <nav>
          <p className={classes.login}>
            <a href="">Login</a>
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
