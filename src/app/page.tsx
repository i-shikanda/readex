"use client"
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import NewArrivals from "./components/sections/newarrivals";
import Testimonials from "./components/sections/testimonials";
import Information from "./components/sections/information";
import { Footer } from "./components/sections/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";

export default function Home() {
  const [toggled, setToggled] = useState(false);
  const toggle = (value: boolean) => {
    setToggled(value);
    return toggled;
  };
  return (
    <main className="relative">
      <Navbar toggle={(value: boolean) => toggle(value)} />
      <Hero />
      <About />
      <NewArrivals />
      <Testimonials />
      <Information />
      <Footer />
      <Sidebar open={toggled} />
    </main>
  );
}