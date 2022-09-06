import React from "react";
import classes from "./LogoButton.module.css"

export default function LogoButton(props) {
  return (
    <img
      className={classes.logo}
      src={props.src}
      alt={props.alt}
      onClick={() =>
        props.onClick()
      }
    />
  );
}
