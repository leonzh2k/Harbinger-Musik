import React from "react";
import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.css";
import AppLogo from "../../assets/applogo.svg";
import Searchbar from "../Searchbar/Searchbar.js";
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className={styles["navbar-items"]}>
        <ul className={styles["nav-menu"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={styles[item.cName]}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <img src={AppLogo} className={styles["navbar-logo"]} alt="Harbinger Musik Logo" width="70" height="70" />

        <Searchbar APP_BASENAME={props.APP_BASENAME} />
      </nav>
      <div className={styles["navbar-margin"]}>Margin</div>
    </div>
  )
}

export default Navbar;