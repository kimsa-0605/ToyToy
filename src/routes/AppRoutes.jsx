import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { CustomerRoutes } from "./CustomerRoutes";
import ScrollToTop from './ScrollToTop';

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <Routes>
        {CustomerRoutes()}
      </Routes>
    </Suspense>
  );
}