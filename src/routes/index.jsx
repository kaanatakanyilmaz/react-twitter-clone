import { createBrowserRouter } from "react-router-dom";
import Notifications from "../pages/notifications";
import Explore from "../pages/explore";
import Home from "../pages/home";
import ErrorFound from "../pages/errorfound";
import MainLayout from "../layout/main";
import Grok from "../pages/grok";
import Message from "../pages/message";
import Bookmarks from "../pages/bookmarks";
import Communities from "../pages/communities";
import Profile from "../pages/profile";
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
        path: "grok",
        element: <Grok />,
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
        path: "*",
        element: <ErrorFound />,
      },
    ],
  },
]);
export default routes;
