import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import image from "../assets/ivan.jpg";
import { Fade } from "react-awesome-reveal";
const Header = (props) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const data = ["iOS Developer", "Full Stack Developer", "Design Enthusiast"];
  useEffect(
    () =>
      setInterval(() => {
        setIsAnimating(true);
        setTimeout((_) => {
          setIndex((prevState) => {
            return (prevState + 1) % 3;
          });
          setIsAnimating(false); // fade back in
        }, 1000);
      }, 3000),
    []
  );

  const learnMoreClickHandler = () => {
    props.aboutMeRef.current.scrollIntoView(true);
  };

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
          <h3 className={isAnimating ? classes.fadeOut : classes.fadeIn}>
            {data[index]}
          </h3>
          <p>Passionate towards code, design and business.</p>
          <button
            className={classes.gradientAnimatedBg}
            onClick={learnMoreClickHandler}
          >
            Learn More
          </button>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
