import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/index.js";
import {UsersPage} from "./pages/index.js";



const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'/users'}/>},
            {path: '/users', element: <UsersPage/>},
        ]}
]);

export {
    router
}