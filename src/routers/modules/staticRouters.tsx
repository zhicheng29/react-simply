import { Navigate } from "react-router-dom";

import Login from "@/pages/login/index";
import Home from "@/pages/home/index";
import NoFoundPage from "@/components/Error/404";

import type { RouteObjectType } from "@/routers/interface/index";

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
