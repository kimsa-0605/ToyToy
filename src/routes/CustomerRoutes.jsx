import { Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import Home from "../pages/Home/Home";
import Delivery from "../pages/Delivery/Delivery";
import Catalog from "../pages/Catalog/Catalog";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import ProductDetail from '../features/products/components/ProductDetail/ProductDetail';
import NotFound from "../pages/NotFound/NotFound";
import LogIn from "../pages/Guest/LogIn/LogIn";

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
  { path: '*', element: <NotFound />}
];

const protectedRoutes = [
  { path: '/checkout', element: <div>Checkout Page</div> },
  { path: '/cart', element: <div>Cart Page</div> },
];

export function CustomerRoutes() {
  return (
    <>
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <MainLayout>{element}</MainLayout>
          }
        />
      ))}

      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <MainLayout>{element}</MainLayout>
            </ProtectedRoute>
          }
        />
      ))}
    </>
  );
}
