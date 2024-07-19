import { createBrowserRouter} from "react-router-dom";

import Histories from "../pages/histories/Histories";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path: "/histories",
        element: <Histories/>
    }
])



export default Routes;