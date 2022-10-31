import React from 'react';
import profilePicture from '../assets/profilePicture.jpg';

export default function NavBar(): JSX.Element {
  return (
    <nav>
      <div className="left">
        <img
          className="logo"
          src={profilePicture}
          alt="aidan looking amazing"
        />
      </div>
      <span>Aidan Bennett</span>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
