import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./global.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Stats from "./routes/Stats";
import NavFooter from "./components/NavFooter/NavFooter";
import Profile from "./routes/Profile";
import Manual from "./routes/Manual";
import CreateLight from "./routes/CreateLight";
import CreateBed from "./routes/CreateBed";
import BraKnapp from "./routes/BraKnapp";

// eslint-disable-next-line react-refresh/only-export-components
const AppLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <NavFooter />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/manual",
        element: <Manual />,
      },
      {
        path: "/createLight",
        element: <CreateLight />,
      },
      {
        path: "/createBed",
        element: <CreateBed />,
      },
      {
        path: "/braknapp",
        element: <BraKnapp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <NavFooter /> */}
  </StrictMode>
);
