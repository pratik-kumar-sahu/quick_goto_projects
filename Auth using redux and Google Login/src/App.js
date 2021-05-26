import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage user={user} setUser={setUser} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
