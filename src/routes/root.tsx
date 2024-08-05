import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
import {
    createBrowserRouter,
   
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
      },
  ]);
  export default router;