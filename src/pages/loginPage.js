import { Form, Link } from "react-router-dom";
import classes from "./loginPage.module.css";

function Login() {
  return (
    <>
      <form className={classes.form}>
        <h1>LOG into your account</h1>
        <div className={classes.data_box}>
          <label htmlFor="email ">Email address</label>
          <input id="email" type="email" name="email" />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="passwod ">Password</label>
          <input
            id="passwod"
            type="password"
            name="passwod"
            minLength={8}
            placeholder="........"
          />
        </div>
        <p className={classes.control}>
          <Link to={"/"}>
            <button className={classes.cancel} type="button">
              Cancel
            </button>
          </Link>
          <button className={classes.login}>Login</button>
        </p>
      </form>
    </>
  );
}
export default Login;
