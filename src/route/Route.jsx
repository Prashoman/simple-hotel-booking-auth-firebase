import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Menu from "../componets/Menu/Menu";
import LogIn from "../componets/LogIn/LogIn";
import SingUp from "../componets/SingUp/SingUp";
import DashBoard from "../componets/Dashboard/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Menu></Menu>,
        },
        {
            path: "login",
            element: <LogIn></LogIn>,
        },
        {
            path: "register",
            element: <SingUp></SingUp>,
        },
      ],
    },{
        path: "/dash",
        element: <DashBoard></DashBoard>,
    }
  ]);
export default router;
  