import React, { useEffect, useState } from "react";
import { RouterProvider as Router, createHashRouter, createBrowserRouter } from "react-router-dom";

import { useSelector } from "@/redux";
import useTheme from "@/hooks/useTheme";
import useMessage from "@/hooks/useMessage";
import usePermission from "@/hooks/usePermission.ts";
import { wrappedStaticRouter } from "@/routers/modules/staticRouters.tsx";
import { convertToDynamicRouterFormat } from "@/routers/helper/ConvertRouter.tsx";

import NotFound from "@/components/Error/404.tsx";

import type { RouteObject } from "react-router-dom";
import type { RootStateType } from "@/redux";
import type { RouteObjectType } from "@/routers/interface";

const mode = import.meta.env.VITE_ROUTER_MODE;

const RouterProvider: React.FC = () => {
  useTheme();
  useMessage();

  const { initPermission } = usePermission();

  const token = useSelector((state: RootStateType) => state.user.token);
  const authMenuList = useSelector((state: RootStateType) => state.auth.authMenuList);

  const [routerList, setRouterList] = useState<RouteObjectType[]>(wrappedStaticRouter);

  useEffect(() => {
    if (!authMenuList.length) {
      initPermission(token);
      return;
    }

    const dynamicRouter = convertToDynamicRouterFormat(authMenuList);
    const allRouter = [...wrappedStaticRouter, ...dynamicRouter];

    allRouter.forEach(item => item.path === "*" && (item.element = <NotFound />));

    setRouterList(allRouter);
  }, [authMenuList]);

  const routerMode = {
    hash: () => createHashRouter(routerList as RouteObject[]),
    history: () => createBrowserRouter(routerList as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
