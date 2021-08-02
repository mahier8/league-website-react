import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Intro from "./components/Intro/Intro";
import Outro from "./components/Outro/Outro";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Outro />
        <Intro />
        <Outro />
      </div>
    </div>
  );
}

export default App;
