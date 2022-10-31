import React from 'react';
import { Helmet } from 'react-helmet';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Home | Aidan Bennett</title>
      </Helmet>
      <div>
        <h1>Hi, I'm Aidan Bennett</h1>
      </div>
    </>
  );
}
