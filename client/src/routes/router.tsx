import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, Login, Profile, Register } from "../pages";
import { Layout } from "../pages/layout";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
// export const FORGOTPASSWORD = "/forgot-password";

export const PROTECTED = "/";
export const HOME = "/home";
export const PROFILE = "/profile/:id?";

export const router = createBrowserRouter([
  { path: ROOT, element: <Home /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        // Redirect to /dashboard when accessing the root path
        index: true,
        path: "",
        element: <Navigate to={HOME} replace />,
      },
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
    ],
  },
]);
