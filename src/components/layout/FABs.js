import React from "react";
import LogoButton from "../Common/LogoButton";
import classes from "./FABs.module.css";
import linkedInLogo from "../../assets/Socials/linkedin-3-128.png";
import githubLogo from "../../assets/Socials/github-11-128.png";

export default function FABs() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    // <div className={classes.layer}>
      <div className={classes.buttonGroup}>
        <LogoButton
          src={linkedInLogo}
          alt={"linkedinLogo"}
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/ivanteozhiming/")
          }
        />
        <LogoButton
          src={githubLogo}
          alt={"githubLogo"}
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/ivanteozhiming/")
          }
        />
      </div>
    // </div>
  );
}
