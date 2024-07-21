import { createBrowserRouter} from "react-router-dom";

import Histories from "../pages/histories/Histories";
import Home from "../pages/Home";
import Words from "../pages/words/Words";
import {HistoryDetail} from '../pages/histories/HistoryDetail';

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path: "/histories",
        element: <Histories/>
    },
    {
      path: '/histories/:id',
      element: <HistoryDetail/>
    },
    {
        path: "/words",
        element: <Words/>
    }
])



export default Routes;