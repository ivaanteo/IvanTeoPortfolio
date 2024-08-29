import classes from "./Projects.module.css";
import Project from "./project/Project";
import {
  auxBoxImages,
  auxboxDesc,
  auxboxTechDesc,
  evibeImages,
  eVibeDesc,
  eVibeTechDesc,
  stockFundamentalDesc,
  stockFundamentalTechDesc,
  stockFundamentalImages,
  fundleDesc,
  fundleTechDesc,
  fundleImages,
  pbmDesc,
  pbmTechDesc,
  pbmImages,
  fypDesc,
  fypTechDesc,
  fypImages,
  bussinDesc,
  bussinTechDesc,
  bussinImages,
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
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"E-Vibe"}
              desc={eVibeDesc}
              techDesc={eVibeTechDesc}
              imgs={evibeImages}
            />
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"Stock Fundamental Analysis"}
              desc={stockFundamentalDesc}
              techDesc={stockFundamentalTechDesc}
              imgs={stockFundamentalImages}
              isLandscape={true}
            />
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"Fundle"}
              desc={fundleDesc}
              techDesc={fundleTechDesc}
              imgs={fundleImages}
              isLandscape={true}
            />
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"Purpose Bound Money"}
              desc={pbmDesc}
              techDesc={pbmTechDesc}
              imgs={pbmImages}
              isLandscape={true}
            />
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"Virtual Spectacle Try-On"}
              desc={fypDesc}
              techDesc={fypTechDesc}
              imgs={fypImages}
              isLandscape={false}
            />
            <hr />
          </Fade>
          <Fade>
            <Project
              title={"Bussin'"}
              desc={bussinDesc}
              techDesc={bussinTechDesc}
              imgs={bussinImages}
              isLandscape={false}
            />
            <hr />
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
