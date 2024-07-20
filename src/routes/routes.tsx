import { createBrowserRouter} from "react-router-dom";

import Histories from "../pages/histories/Histories";
import Home from "../pages/Home";
import Words from "../pages/words/Words";

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
        path: "/words",
        element: <Words/>
    }
])



export default Routes;