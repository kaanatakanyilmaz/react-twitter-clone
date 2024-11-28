import { createBrowserRouter } from "react-router-dom";
import Notifications from "../pages/notifications";
import Explore from "../pages/explore";
import Home from "../pages/home";
import ErrorFound from "../pages/errorfound";
import MainLayout from "../layout/main";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element:<Home/>
            },

            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: '*',
                element: <ErrorFound />
            }


        ]
    },


])
export default routes


