import classes from "./AboutMe.module.css";

import { Fade } from "react-awesome-reveal";
import Bullet from "./Common/Bullet";

const AboutMe = (props) => {
  const onClickHandler = () => {
    props.projectsRef.current.scrollIntoView(true);
  };

  return (
    <section className={classes.aboutMe} ref={props.aboutMeRef}>
      <Fade>
        <div className={classes.container}>
          <h1>
            <span>About</span> Me
          </h1>
          <p className={classes.longText}>
            Nice to meet you! I'm Ivan, a budding software developer from
            Singapore.
            <br />
            <br />
            I'm also a Year 3 Computer Science and Business undergraduate at
            Nanyang Technological University's Renaissance Engineering Programme
            -- find out more about my course{" "}
            <a
              className={classes.anchorLink}
              href="https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.spanBtn}>here</span>
            </a>
            . I'm currently studying in UC Berkeley as an exchange student for
            the year, and I'm looking for software engineering internships here
            during the summer!
            <br />
            <br />
            It was 2017 when I first watched a movie called "The Social
            Network", which told the story of Mark Zuckerberg's journey in the
            development of Facebook. Little did I know, this movie would inspire
            me to build playful, yet beautiful mobile applications and websites.
            <br />
            <br />
            Today, code has become the medium in which I express my creativity
            -- take a look at my{" "}
            <a
              className={classes.anchorLink}
              onClick={onClickHandler}
            >
              <span className={classes.spanBtn}>projects</span>
            </a>{" "}
            below!
          </p>
          <div className={classes.languagesContainer}>
            <div className={classes.descContainer}>
              <h3>Tech I use</h3>
              <p>
                <Bullet /> React.js, Express, Node.js, MongoDB
                <br />
                <Bullet /> Figma
                <br />
                <Bullet /> XCode
                <br />
                <Bullet /> Git, GitHub
                <br />
                <Bullet /> Firebase
              </p>
            </div>
            <div className={classes.descContainer}>
              <h3>Languages I use</h3>
              <p>
                <Bullet /> Python, Java, C/C++
                <br />
                <Bullet /> Swift, Objective-C
                <br />
                <Bullet /> HTML, CSS, JS
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
