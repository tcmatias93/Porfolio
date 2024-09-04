import styles from "./app.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nabvar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
