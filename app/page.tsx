"use client"; // needed for hooks in Next.js app router

import { useState } from "react";
import { motion } from "framer-motion";
import Intro from "./Components/Animation";
import Main from "./Components/Main";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projetcs from "./Components/Projetcs";
import WorkProjects from "./Components/WorkProjects";
import Connect from "./Components/Connect";
import Header from "./Components/Header";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  // const [show, setShow] = useState(false);

  // const showMenu = () => {
  //   setShow((prev) => !prev);
  // };

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full overflow-hidden"
        >
          <Header />
          <Main />
          <About />
          <Experience />
          <Projetcs />
          <WorkProjects />
          <Connect />
        </motion.div>
      )}
    </>
  );
}
