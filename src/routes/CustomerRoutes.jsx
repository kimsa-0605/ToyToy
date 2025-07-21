import { Route } from "react-router-dom";
import { lazy } from "react";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";

import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Home = lazy(() => import("../pages/Home/Home"));
const Delivery = lazy(() => import("../pages/Delivery/Delivery"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const About = lazy(() => import("../pages/About/About"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const ProductDetail = lazy(() => import("../features/products/components/ProductDetail/ProductDetail"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const LogIn = lazy(() => import("../pages/Guest/LogIn/LogIn"));

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/catalog/wooden-toys', element: <Catalog /> },
  { path: '/catalog/stuffed-animals', element: <Catalog /> },
  { path: '/about', element: <About /> },
  { path: '/contacts', element: <Contacts /> },
  { path: '/delivery', element: <Delivery /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/login', element: <LogIn /> },
  { path: '*', element: <NotFound /> }
];

const protectedRoutes = [
  { path: '/checkout', element: <Home /> },
  { path: '/cart', element: <Home /> },
];

export function CustomerRoutes() {
  return (
    <>
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout>{element}</MainLayout>}
        />
      ))}

      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoutes allowedRoles={['customer']}>
              <MainLayout>{element}</MainLayout>
            </ProtectedRoutes>
          }
        />
      ))}
    </>
  );
}