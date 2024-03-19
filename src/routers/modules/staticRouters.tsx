import { Loading } from "@/components/Loading";
import Login from "@/pages/login/index";
import NoFoundPage from "@/components/Error/404";
import NotNetWork from "@/components/Error/500.tsx";
import RouterGuard from "@/routers/helper/RouterGuard.tsx";

import type { RouteObjectType } from "@/routers/interface/index.ts";

export const staticRouters: RouteObjectType[] = [
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
  },
  {
    path: "/500",
    element: <NotNetWork />,
    meta: {
      title: "500"
    }
  },
  {
    path: "*",
    element: <Loading />
  }
];

export const wrappedStaticRouter = staticRouters.map(route => {
  return {
    ...route,
    element: <RouterGuard>{route.element}</RouterGuard>,
    loader: () => {
      return { ...route.meta };
    }
  };
});
