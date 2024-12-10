import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Gear,
  ShoppingBagOpen,
  Star,
  CreditCard,
  Ticket,
  Users,
} from "@phosphor-icons/react";
import classes from "./settingsRootLayout.module.css";

function SettingsRootLayout() {
  const [isDropDawn, setIsDropDawn] = useState(false);
  const handleDropDawn = () => {
    setIsDropDawn(!isDropDawn ? true : false);
  };
  return (
    <>
      <div className={classes.section_settings}>
        <div className={classes.setting_container}>
          <aside className={classes.aside}>
            <ul className={classes.aside_ul}>
              <Link to={"/users"}>
                <li className={classes.aside_list}>
                  <Gear size={22} color="#fff" />
                  Settings
                </li>
              </Link>

              <Link to={"booking"}>
                <li className={classes.aside_list}>
                  <ShoppingBagOpen size={22} color="#fff" />
                  My bookings
                </li>
              </Link>

              <Link to={"review"}>
                <li className={classes.aside_list}>
                  <Star size={22} color="#fff" />
                  My Reviews
                </li>
              </Link>

              <Link to={"billing"}>
                <li className={classes.aside_list}>
                  <CreditCard size={22} color="#fff" />
                  Billings
                </li>
              </Link>
            </ul>
            <div className={classes.section_admin}>
              <h2>Admin</h2>
              <hr />
              <ul className={classes.aside_ul}>
                <li onClick={handleDropDawn}>
                  <p className={classes.aside_list}>
                    <Ticket size={22} color="#fff" />
                    Manage Tour
                  </p>
                </li>
                {isDropDawn && (
                  <ul className={classes.dropdawn_box}>
                    <Link to={"new"}>
                      <li onClick={handleDropDawn}>Create New Tour</li>
                    </Link>

                    <Link to={"manage-tours"}>
                      <li onClick={handleDropDawn}>Edit Tour</li>
                    </Link>
                  </ul>
                )}
                <Link to={"manage-users"} className={classes.aside_list}>
                  <Users size={22} color="#fff" />
                  Manage Users
                </Link>
                <Link className={classes.aside_list}>
                  <Star size={22} color="#fff" />
                  Manage Reviews
                </Link>
                <Link className={classes.aside_list}>
                  <ShoppingBagOpen size={22} color="#fff" />
                  manage booking
                </Link>
              </ul>
            </div>
          </aside>
          <main className={classes.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default SettingsRootLayout;
