import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import Cats from "./Cats";
import Home from "./Home";
import Dogs from "./Dogs";
import Profile from "./Profile";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

const firebaseConfig = {
  apiKey: "AIzaSyAvhG6Owl2X3ZsFR5EoQ39Zt9dMQvmhKGY",
  authDomain: "my-react-project-c0c58.firebaseapp.com",
  databaseURL: "https://my-react-project-c0c58-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-react-project-c0c58",
  storageBucket: "my-react-project-c0c58.appspot.com",
  messagingSenderId: "926748951675",
  appId: "1:926748951675:web:2644151290b48f32264ede"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();
  const [user, loading] = useAuthState(firebase.auth());

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <Router>
      <div className={classes.mainWrapper}>
        {/* <AppBar /> */}

        <Switch>
          <CustomRoute secured path="/chat/:id">
            <Chat />
          </CustomRoute>

          <CustomRoute path="/playground" secured withAppBar={true}>
            <Playground myProps={1} />
          </CustomRoute>

          <CustomRoute path="/cats" secured withAppBar={true}>
            <Cats />
          </CustomRoute>
          <CustomRoute path="/dogs" secured withAppBar={true}>
            <Dogs />
          </CustomRoute>
          <CustomRoute path="/profile" secured withAppBar={true}>
            <Profile />
          </CustomRoute>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/"  withAppBar={false}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
