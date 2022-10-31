import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div>
        <h1>404 - Not Found</h1>
      </div>
    </>
  );
}
