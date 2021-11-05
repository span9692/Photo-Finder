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
    <div>
      <Navigation isLoaded={isLoaded} />
      <div className='wrapper'>
        <div className='sidebar'>
        <div className='mainbar'>
        <div className='sidebar'>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
