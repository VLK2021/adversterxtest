import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css'
import {router} from "./router.jsx";
import {store} from "./store/index.js";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
