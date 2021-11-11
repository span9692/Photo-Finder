// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Photographers from './components/Photographers'
import Splash from './components/Splash'
import PhotographerForm from "./components/PhotographerForm";
import PhotographerProfile from "./components/PhotographerProfile";
import Bookings from "./components/Bookings";
import NotFound from "./components/NotFound"

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
        <Route exact path='/photographers'>
          <Photographers />
        </Route>
        <Route path='/post'>
          <PhotographerForm />
        </Route>
        <Route path='/photographers/:photographerId'>
          <PhotographerProfile />
        </Route>
        <Route path='/bookings'>
          <Bookings />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
