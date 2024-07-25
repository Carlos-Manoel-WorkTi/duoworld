import { createBrowserRouter} from "react-router-dom";

import Histories from "../pages/histories/Histories";
import Home from "../pages/Home";
import Words from "../pages/words/Words";
import {HistoryDetail} from '../pages/histories/HistoryDetail';
import HistoryPage from "../pages/histories/HistoryPage";

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
        path: '/histories/:id/:name/:page',
        element: <HistoryPage/>
      },
    {
        path: "/words",
        element: <Words/>
    }
])



export default Routes;