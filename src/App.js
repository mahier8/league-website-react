import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Intro from "./components/Intro/Intro";
import Teams from "./components/Teams/Teams";
import Tables from "./components/Tables/Tables";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Teams />
        <Tables />
        <Social />
        <Footer />
      </div>
    </div>
  );
}

export default App;
