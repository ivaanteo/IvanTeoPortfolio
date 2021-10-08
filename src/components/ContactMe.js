import classes from "./ContactMe.module.css";
import linkedInLogo from "../assets/Socials/linkedin-3-128.png";
import githubLogo from "../assets/Socials/github-11-128.png";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ContactMe = (props) => {
  const [buttonText, setButtonText] = useState("Email");

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section className={classes.contactMe} ref={props.contactMeRef}>
      <Fade>
        <div className={classes.container}>
          <h1>
            <span>Contact</span> Me
          </h1>
          <p>
            From job opportunities to casual conversions, I'd love to have a
            chat with you - maybe over a <span>coffee</span> or two!
          </p>
          <button
            onClick={() => {
              setButtonText("Copied");
              navigator.clipboard.writeText("ivanteozhiming@gmail.com");
            }}
            onMouseLeave={() => {
              setButtonText("Email");
            }}
          >
            {buttonText} <i className="fa fa-copy"></i>
          </button>
          <div className={classes.flex}>
            <img
              className={classes.logo}
              src={linkedInLogo}
              alt={"linkedinLogo"}
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/ivanteozhiming/")
              }
            />
            <img
              className={classes.logo}
              src={githubLogo}
              alt={"githubLogo"}
              onClick={() => openInNewTab("https://github.com/ivaanteo")}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ContactMe;
