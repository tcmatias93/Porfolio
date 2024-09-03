import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nabvar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
