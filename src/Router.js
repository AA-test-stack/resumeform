import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Resume from './Resume';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<div>Error 404 PAGE NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
