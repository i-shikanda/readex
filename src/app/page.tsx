import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import NewArrivals from "./components/sections/newarrivals";
import Testimonials from "./components/sections/testimonials";
import Information from "./components/sections/information";
import { Footer } from "./components/sections/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewArrivals />
      <Testimonials />
      <Information />
      <Footer />
    </>
  );
}