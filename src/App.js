import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Fixtures from "./pages/Fixtures/Fixtures";
import Signup from "./pages/Signup/Signup";
import Standings from "./pages/Standings/Standings";
import TeamInfo from "./pages/TeamInfo/TeamInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <div className="sections">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/teaminfo">
              <TeamInfo />
            </Route>
            <Route path="/fixtures">
              <Fixtures />
            </Route>
            <Route path="/standings">
              <Standings />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
