import NavBar from "../../components/components-hero/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
