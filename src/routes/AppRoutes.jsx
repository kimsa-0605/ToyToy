import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { CustomerRoutes } from "./CustomerRoutes";

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {CustomerRoutes()}
      </Routes>
    </Suspense>
  );
}