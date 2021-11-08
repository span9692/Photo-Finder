// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Splash from './components/Splash'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState(['"We are making photographs to understand what our lives mean to us."', '-Ralph Hattersley'])
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const cats = 'Toby'
  return isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route path='/home'>
          <Home cats={cats} />Hello
        </Route>
      </Switch>
    </div>
  );
}

export default App;
