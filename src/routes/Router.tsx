import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { publicRoutes } from ".";
import Page from "../components/page/index";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {publicRoutes.map((route) => {
        const ComponentRoute = route.component;
        return (
          <Route
            path={`${route.path}`}
            element={
              <Page title={route.titleName}>
                <ComponentRoute />
              </Page>
            }
            key={route.path}
          />
        );
      })}
    </Routes>
  </BrowserRouter>
);

export default Router;
