import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';
import PublicLayout from '../layouts/PublicLayout';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => {
          const { path, label, Element } = item;
          return (
            <Route element={<PublicLayout title={label} />} key={path}>
              <Route element={<Element />} path={path} />
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
