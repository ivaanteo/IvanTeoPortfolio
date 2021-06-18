import classes from "./NavBar.module.css";
import navBarLinks from "../../util/navBarLinks";
// import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.wrapper}>
    <div className={`${classes.navBar} ${classes.navBarJustify}`}>
      <a className={classes.navTitle}>
        <h1>Your Logo</h1>
      </a>
      <div className={`${classes.navLinks} ${menuIsOpen || classes.close}`}>
        {navBarLinks.map((link) => (
          <a
            key={link.to}
            className={classes.navLink}
            to={link.to}
            activeClassName={classes.activeNavLink}
            exact
            onClick={menuClickHandler}
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className={classes.buttonGroup}>
      <a
        to={"login"}
        className={classes.button}
      >
        Login
      </a>
      <i
        className={`${menuIsOpen ? "fa fa-times" : "fa fa-bars"} ${classes.icon}`}
        onClick={menuClickHandler}
      ></i>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
