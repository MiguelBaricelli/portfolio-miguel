import NavBar from "../../components/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
