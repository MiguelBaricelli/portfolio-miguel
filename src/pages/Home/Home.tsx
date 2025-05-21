import NavBar from "../../components/components-hero/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
