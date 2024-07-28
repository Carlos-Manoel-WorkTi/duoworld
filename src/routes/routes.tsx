import { createBrowserRouter} from "react-router-dom";

import Histories from "../pages/histories/Histories";
import Home from "../pages/Home";
import Words from "../pages/words/Words";
import {HistoryDetail} from '../pages/histories/HistoryDetail';
import HistoryPage from "../pages/histories/HistoryPage";
import Error404 from "../pages/erros/Error404";
import Songs from "../pages/songs/Songs";

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement: <Error404/>,
    },
    {
        path: "/histories",
        element: <Histories/>,
        errorElement: <Error404/>
    },
    {
      path: '/histories/:id',
      element: <HistoryDetail/>,
      errorElement: <Error404/>
    },
    {
        path: '/histories/:id/:name/:page',
        element: <HistoryPage/>,
        errorElement: <Error404/>
      },
    {
        path: "/words",
        element: <Words/>,
        errorElement: <Error404/>
    },
    {
        path: "/songs",
        element: <Songs/>,
        errorElement: <Error404/>
    },
   
])



export default Routes;