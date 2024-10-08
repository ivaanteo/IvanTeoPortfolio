import classes from "./AboutMe.module.css";

import { Fade } from "react-awesome-reveal";

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
            Nice to meet you! I'm Ivan, a software engineer from Singapore.
            <br />
            <br />
            I'm also a final year Computer Science and Business undergraduate at
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
            . I'm graduating in December 2024 and am looking for full time roles
            in Singapore or New York!
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
            <a className={classes.anchorLink} onClick={onClickHandler}>
              <span className={classes.spanBtn}>projects</span>
            </a>{" "}
            below!
          </p>
        </div>
      </Fade>
      {/* </Slide> */}
    </section>
  );
};

export default AboutMe;
