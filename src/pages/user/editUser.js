import {
  User,
  Cardholder,
  ShoppingBagOpen,
  Star,
  CreditCard,
} from "@phosphor-icons/react";
import { Link, Outlet } from "react-router-dom";
import Profile from "../../img/users/user-15.jpg";
import classes from "./editUser.module.css";

function EditUser() {
  return (
    <>
      <h1 className={classes.userhead}>Manage User</h1>
      <div className={classes.user_container}>
        <div className={classes.menu}>
          <Link to={""} className={classes.menu_link}>
            <p className={classes.menu_item}>
              <User size={22} color="#555" />
              <span>About User</span>
            </p>
          </Link>
          <Link to={"booking"} className={classes.menu_link}>
            <p className={classes.menu_item}>
              <ShoppingBagOpen size={22} color="#555" />
              <span>Bookings</span>
            </p>
          </Link>
          <Link to={"review"} className={classes.menu_link}>
            <p className={classes.menu_item}>
              <Star size={22} color="#555" />
              <span>Reviews</span>
            </p>
          </Link>
          <Link to={"delivered"} className={classes.menu_link}>
            <p className={classes.menu_item}>
              <CreditCard size={22} color="#555" />
              <span>Delivered</span>
            </p>
          </Link>
        </div>
        <aside className={classes.aside}>
          <figure className={classes.profile_photo}>
            <img src={Profile} alt="poto of" />
          </figure>
          <h2>Paul Peterson</h2>
        </aside>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default EditUser;
