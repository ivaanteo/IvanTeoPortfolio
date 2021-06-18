import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import image from "../assets/formalPhoto.jpg";
const Header = () => {
  const [index, setIndex] = useState(0);
  const data = [
    "iOS Developer",
    "Front End Developer",
    "Coffee Lover",
  ];
  useEffect(
    () =>
      setInterval(() => {
        setIndex((prevState) => {
          if (prevState >= 2) {
            return 0;
          }
          return prevState + 1;
        });
      }, 3000),
    []
  );

  // console.log(index)
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={`${classes.circleGradientBorder} ${classes.gradientAnimatedBg}`}>
          <img src={image} alt="ivan"></img>
        </div>
        <h1>
          Hi, I'm <span className={classes.gradientAnimatedBg}>Ivan</span>
        </h1>
        <h3>{data[index]}</h3>
        {/* <p>Sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph sample paragraph </p> */}
        <p>Passionate towards code, design and a lovely cup of coffee.</p>
        <button className={classes.gradientAnimatedBg}>Contact Me!</button>
      </div>
    </header>
  );
};

export default Header;
