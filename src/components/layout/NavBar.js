import classes from "./NavBar.module.css";
import navBarLinks from "../../util/navBarLinks";
import { useState, useEffect } from "react";
import resume from "../../assets/resume.pdf";
import { Links } from "../../util/navBarLinks";

const NavBar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const Constants = {home: "home", scrollBuffer: 100}

  const menuClickHandler = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };
  const scrollLinkClickHandler = (event) => {
    if (event.target.id === Links.aboutMe) {
      props.aboutMeRef.current.scrollIntoView(true);
    } else if (event.target.id === Links.projects) {
      props.projectsRef.current.scrollIntoView(true);
    } else if (event.target.id === Links.contact) {
      props.contactMeRef.current.scrollIntoView(true);
    } else if (event.target.id === Constants.home) {
      props.homeRef.current.scrollIntoView(true);
    }
  };

  const [selectedTab, setSelectedTab] = useState(Constants.home)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > props.contactMeRef.current.offsetTop - window.innerHeight/2) {
        setSelectedTab(Links.contact)
      } 
      else if (window.scrollY > props.projectsRef.current.offsetTop - window.innerHeight/2) {
        setSelectedTab(Links.projects)
      }
      else if (window.scrollY > props.aboutMeRef.current.offsetTop - window.innerHeight/2) {
        setSelectedTab(Links.aboutMe)
      } 
      else {
        setSelectedTab(Constants.home)
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])

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
              className={`${selectedTab===link.to ? classes.selectedNavLink : classes.navLink}`}
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
