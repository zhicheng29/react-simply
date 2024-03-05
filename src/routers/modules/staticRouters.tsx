import Login from "@/views/login/index";
import Home from "@/views/home/index";
import { Navigate } from "react-router-dom";

import type { RouteObjectType } from "@/routers/interface/index";
import NoFoundPage from "@/components/Error/404";

export const staticRouters: RouteObjectType[] = [
  {
    path: "/",
    element: <Navigate to={"/home"} />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/404",
    element: <NoFoundPage />,
    meta: {
      title: "404"
    }
  }
];
