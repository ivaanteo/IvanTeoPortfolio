import classes from "./NavBar.module.css";
import navBarLinks from "../../util/navBarLinks";
import { useState } from "react";
import resume from "../../assets/Ivan Teo Resume Oct 2021.pdf";

const NavBar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };

  const scrollLinkClickHandler = (event) => {
    if (event.target.id === "/about-me") {
      props.aboutMeRef.current.scrollIntoView(true);
    } else if (event.target.id === "/projects") {
      props.projectsRef.current.scrollIntoView(true);
    } else if (event.target.id === "/contact") {
      props.contactMeRef.current.scrollIntoView(true);
    } else if (event.target.id === "home") {
      props.homeRef.current.scrollIntoView(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.navBar} ${classes.navBarJustify}`}>
        <h1 className={classes.logo}>
          <span id="home" onClick={scrollLinkClickHandler}>
            Ivan
          </span>
        </h1>
        <div className={`${classes.navLinks} ${menuIsOpen || classes.close}`}>
          {navBarLinks.map((link) => (
            <a
              key={link.to}
              id={link.to}
              className={classes.navLink}
              onClick={scrollLinkClickHandler}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className={classes.buttonGroup}>
          <a
            className={classes.button}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <i
            className={`${menuIsOpen ? "fa fa-times" : "fa fa-bars"} ${
              classes.icon
            }`}
            onClick={menuClickHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
