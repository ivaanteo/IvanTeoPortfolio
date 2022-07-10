// import logo from './logo.svg';
import NavBar from "./components/layout/NavBar";
// import LandingPage from "./pages/LandingPage";
import { useRef } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Ball from "./components/Balls/Ball/Ball";
import Balls from "./components/Balls/Balls";

function App() {
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const contactMeRef = useRef();
  const homeRef = useRef();

  return (
    <>
      <NavBar
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        contactMeRef={contactMeRef}
        homeRef={homeRef}
      />
      
      <Balls />
      <Header homeRef={homeRef} aboutMeRef={aboutMeRef} />
      <AboutMe aboutMeRef={aboutMeRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
}

export default App;
