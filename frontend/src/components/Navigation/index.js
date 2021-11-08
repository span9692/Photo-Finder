// frontend/src/components/Navigation/index.js
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import PhotographerForm from '../PhotographerForm'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div class='become-photographer'>
        <div>
          <button><Link to='/post'>Become a Photographer</Link></button>
        </div>
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      </div>
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
              <Link class='home-button' exact to="/">Home</Link>
            </div>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
