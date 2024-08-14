import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Journals from "../components/Journals";
import Text from "../components/Text";
import Blocks from "../components/Blocks";
import Visual from "../components/Visualize";
import Workflow from "../components/Workflow";
import About from "../components/About";

import JoinBeta from "../components/JoinBeta";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <Journals />
        <div className="splitter"></div>
        <Blocks />
        <Text />
        <Visual />
        <div className="splitter"></div>

        <Workflow />
        <JoinBeta />
      </div>
      <Parallax speed={0}>
        <About />
      </Parallax>
    </div>
  );
}
