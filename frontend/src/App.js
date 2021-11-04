// frontend/src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <div>
      <h2>HELLO FROM APP</h2>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
