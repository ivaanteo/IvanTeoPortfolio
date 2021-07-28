import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import image from "../assets/formalPhoto.jpg";
import { Fade, Slide } from "react-awesome-reveal";
const Header = (props) => {
  const [index, setIndex] = useState(0);
  const data = ["iOS Developer", "Front End Developer", "Coffee Lover"];
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

  const learnMoreClickHandler = () => {
    props.aboutMeRef.current.scrollIntoView(true);
  }

  // console.log(index)
  return (
    <header className={classes.header} ref={props.homeRef}>
      <Fade>
        <div className={classes.container}>
          <div
            className={`${classes.circleGradientBorder} ${classes.gradientAnimatedBg}`}
          >
            <img src={image} alt="ivan"></img>
          </div>
          <h1>
            Hi, I'm <span className={classes.gradientAnimatedBg}>Ivan.</span>
          </h1>
          <h3>{data[index]}</h3>
          <p>Passionate towards code, design and a lovely cup of coffee.</p>
          <button className={classes.gradientAnimatedBg} onClick={learnMoreClickHandler}>Learn More</button>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
