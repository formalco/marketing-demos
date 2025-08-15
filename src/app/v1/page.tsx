import type { JSX } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoWall from "./components/LogoWall";
import Solutions from "./components/Solutions";
import Outcomes from "./components/Outcomes";
import Platform from "./components/Platform";
import Testimonial from "./components/Testimonial";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

export default function HomeV1(): JSX.Element {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <LogoWall />
      <Solutions />
      <Outcomes />
      <Platform />
      <Testimonial />
      <Technology />
      <Footer />
    </div>
  );
}


