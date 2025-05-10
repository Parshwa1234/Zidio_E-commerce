import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./forms/SignUp.jsx";
import SignIn from "./forms/SignIn.jsx";
import Registration from "./pages/Registration.jsx";

const RootApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>,
      children: [
        { index: true, element: <Navigate to="home" /> },
        { path: "home", element: <Home /> },
      ],
    },
    {
      path: "/auth",
      element: <Registration />,
      children: [
        { path: "sign-up", element: <SignUp setIsLoggedIn={setIsLoggedIn} /> },
        { path: "sign-in", element: <SignIn setIsLoggedIn={setIsLoggedIn} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);