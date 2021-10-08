import classes from "./Projects.module.css";
import Project from "./project/Project";
import {
  auxBoxImages,
  auxboxDesc,
  auxboxTechDesc,
  evibeImages,
  eVibeDesc,
  eVibeTechDesc,
} from "../util/projectHelpers";
import { Fade } from "react-awesome-reveal";

const Projects = (props) => {
  return (
    <>
      <section ref={props.projectsRef} className={classes.projects}>
        <div className={classes.container}>
          <Fade>
            <h1>
              Featured{" "}
              <span className={classes.gradientAnimatedBg}>Projects</span>
            </h1>
          </Fade>
          <Fade>
            <Project
              title={"AuxBox"}
              desc={auxboxDesc}
              techDesc={auxboxTechDesc}
              imgs={auxBoxImages}
            />
          <hr/>
          {/* <div/> */}
          </Fade>
          <Fade>
            <Project
              title={"E-Vibe"}
              desc={eVibeDesc}
              techDesc={eVibeTechDesc}
              imgs={evibeImages}
            />
          </Fade>
          <Fade>
            <h1>More Projects Coming Soon!</h1>
          </Fade>
        </div>
      </section>
    </>
  );
};
export default Projects;
