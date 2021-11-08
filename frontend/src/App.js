// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Splash from './components/Splash'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
