// frontend/src/components/Navigation/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const photographers = useSelector(state=>Object.values(state.photographer))
  let flag = false;

  photographers.forEach(photographer => {
    if (photographer?.userId === sessionUser?.id) {
      flag = true;
    }
  })

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div class='ayo'>
        {flag ? null :
        <div>
          <button className='no-border blackback'>
            <Link class='post-photographer' to='/post'>Become a Photographer</Link>
          </button>
        </div>
        }
        <div className='black'>
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className='nav-buttons'>
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
            <div>
              <Link class='home-button path' exact to="/">Photo Finders</Link>
            </div>
            <div>
              <Link class='home-button path' to='/photographers'>Photographers</Link>
            </div>
            <div>
              <Link class='home-button path' to='/bookings'>Bookings</Link>
            </div>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
