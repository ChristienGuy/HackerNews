import React from "react";
import { Link } from "@reach/router";
import style from "./BottomNav.css";

const BottomNav = () => (
  <nav className={style.bottomNav}>
    <ul className={style.bottomNavList}>
      <li>
        <Link className={style.bottomNavLink} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={style.bottomNavLink} to="new">
          New
        </Link>
      </li>
    </ul>
  </nav>
);

export default BottomNav;
