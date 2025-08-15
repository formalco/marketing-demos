import { type JSX } from "react";
import Hero from "./components/Hero";
import BinaryAccess from "./components/BinaryAccess";
import ProblemFraming from "./components/ProblemFraming";
import SolutionOverview from "./components/SolutionOverview";
import HowItWorks from "./components/HowItWorks";
import Compliance from "./components/Compliance";
import Pain from "./components/Pain";
import Vision from "./components/Vision";
import Proof from "./components/Proof";
import Adoption from "./components/Adoption";
import FinalCTA from "./components/FinalCTA";

export default function HomeV4(): JSX.Element {
  return (
    <main>
      <Hero />
      <BinaryAccess />
      <ProblemFraming />
      <SolutionOverview />
      <HowItWorks />
      <Compliance />
      <Adoption />
      <FinalCTA />
      <Pain />
      <Vision />
      <Proof />
     
    </main>
  );
}


