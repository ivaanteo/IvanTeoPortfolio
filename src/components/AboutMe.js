import classes from "./AboutMe.module.css";

import { Fade, Slide } from "react-awesome-reveal";

const AboutMe = (props) => {
  return (
    <section className={classes.aboutMe} ref={props.aboutMeRef}>
      {/* <Slide> */}
      <Fade>
        <div className={classes.container}>
          <h1>
            <span>About</span> Me
          </h1>
          <p className={classes.longText}>
            Nice to meet you! I'm Ivan, a budding{" "}
            <span>software developer</span> from Singapore.
            <br />
            <br />
            It was 2017 when I first watched a movie called "The Social
            Network", which told the story of Mark Zuckerberg's journey in the
            development of Facebook. Little did I know, this movie would inspire
            me to build playful, yet beautiful apps and recently, websites.
            <br />
            <br />
            Today, code has become the medium in which I express my creativity
            -- take a look at my{" "}
            <span className={classes.gradientAnimatedBg}>projects</span> below!
          </p>
          <div className={classes.languagesContainer}>
            <div className={classes.descContainer}>
              <h3>Tech I use</h3>
              <p>
                - React.js
                <br />
                - Figma
                <br />
                - XCode
                <br />
                - Git, GitHub
                <br />- Firebase
              </p>
            </div>
            <div className={classes.descContainer}>
              <h3>Languages I use</h3>
              <p>
                - Python
                <br />
                - Swift
                <br />- HTML, CSS, JS
              </p>
            </div>
          </div>
        </div>
      </Fade>
      {/* </Slide> */}
    </section>
  );
};

export default AboutMe;
