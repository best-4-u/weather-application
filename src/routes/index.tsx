import React, { lazy } from "react";
import { Route, Routes, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LazyForecast = lazy(() => import("../pages/Forecast"));
const LazyNotFound = lazy(() => import("../pages/NotFound"));

function SuspenseLayout() {
  return <React.Suspense fallback={<>Loading...</>}>
    <Outlet />
  </React.Suspense>
}

function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="/forecast" element={<LazyForecast />} />
          <Route path="/" element={<Navigate replace to="/forecast" />} />
          <Route path="/*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
