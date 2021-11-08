// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div class='navbar'>
      <ul class='no-bullet'>
        <li>
          <div class='homebar'>
            <div >
              <NavLink class='home-button' exact to="/">Home</NavLink>
            </div>
            <div>
              {isLoaded && sessionLinks}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
