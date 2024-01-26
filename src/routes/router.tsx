import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import SerciceList from "@/pages/admin/SerciceList";
import AddService from "@/pages/admin/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <SerciceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
