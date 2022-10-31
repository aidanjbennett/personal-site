import React from 'react';
import HomePage from './pages/HomePage';

import { Routes, Route } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
