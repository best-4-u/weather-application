import React, { lazy } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const LazyHome = lazy(() => import("../pages/HomePage"));
const LazyNotFound = lazy(() => import("../pages/NotFound"));

function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element=
          {
            <React.Suspense fallback={<>Loading...</>}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<LazyNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
