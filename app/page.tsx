import Image from "next/image";
import Main from "./Components/Main";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projetcs from "./Components/Projetcs";
import WorkProjects from "./Components/WorkProjects";
import Connect from "./Components/Connect";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Experience />
      <Projetcs />
      <WorkProjects />
      <Connect />
    </>
  );
}
