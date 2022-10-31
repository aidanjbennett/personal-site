import React from 'react';
import NavBar from '../components/NavBar';
import profilePicture from '../assets/profilePicture.jpg';

import { Helmet } from 'react-helmet';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Home | Aidan Bennett</title>
      </Helmet>
      <div className="content">
        <div className="about">
          <h2>Hi, I am Aidan Bennett,</h2>
          <h2>a full stack software engineer</h2>
          <img className="image" src={profilePicture} alt="" />
          <p>
            I am a full stack software engineer I primarily use JavaScript /
            TypeScript, Python and Docker. Right now I am playing with Rust and
            Go. However, I would not say I am efficient in them just yet one day
            tho....
          </p>
        </div>
      </div>
    </>
  );
}
