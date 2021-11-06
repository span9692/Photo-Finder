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

  return isLoaded &&(
    <div class='wrapper'>
      <Navigation isLoaded={isLoaded} />
      <div className='splash'>
        <div class='tagline'>
          <span class='caption'>Capture The Perfect Moment With Us!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
