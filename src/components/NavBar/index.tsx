import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_elements}>
        <ul>
          <li>
            <NavLink to="/forecast"> Forecast </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
