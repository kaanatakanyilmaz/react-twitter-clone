import { createBrowserRouter } from "react-router-dom";
import Notifications from "../pages/notifications";
import Explore from "../pages/explore";
import Home from "../pages/home";
import ErrorFound from "../pages/errorfound";
import MainLayout from "../layout/main";

import Message from "../pages/message";
import Bookmarks from "../pages/bookmarks";
import Communities from "../pages/communities";
import Profile from "../pages/profile";
import Premium from "../pages/premium";
import List from "../pages/list";
import Settings from "../pages/settings";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "message",
        element: <Message />,
      },

      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "*",
        element: <ErrorFound />,
      },
    ],
  },
]);
export default routes;
