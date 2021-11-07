// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);




return isLoaded && (
  <div>
    <Navigation isLoaded={isLoaded} />
    <div class='wrapper'>
      <div className='splash'>
        <div class='tagline'>
          <span class='caption1 style1'>Capture The Perfect</span>
          <span class='caption2 style1'>Moment With Us!</span>
          <div class='get-started'>
            <button class='start-button'>Get Started</button>
          </div>
          <div class='quote'>
            <div id='quote1'>"We are making photographs to understand what our lives mean to us."</div>
            <div id='quote2'>-Ralph Hattersley</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
