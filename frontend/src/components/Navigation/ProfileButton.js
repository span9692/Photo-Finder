import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const photographers = useSelector(state=>Object.values(state.photographer))
  let flag = false;

  photographers.forEach(photographer => {
    if (photographer?.userId === user?.id) {
      flag = true;
    }
  })


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div>
      <button className='profileButton' onClick={openMenu}>
        <i class="far fa-address-card"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown no-bullet">
          <div></div>
          <li className='move'>Hello, {user.username}</li>
          <li className='move'>
            {flag?
            <button className='log-out-button'>
              <Link className='log-out-button' to={`/photographers/${user.id}`}>Profile</Link>
            </button>:null
            }
          </li>
          <li className='move'>
            <button className='log-out-button' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
