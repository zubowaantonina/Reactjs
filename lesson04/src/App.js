import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";

const App = () => {
  return (
    <Router>
      <AppBar/>

      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;