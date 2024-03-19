import { lazy } from "react";
import { getFlatMenuList } from "@/utils";
import { Navigate } from "react-router-dom";
import { RouteObjectType } from "../interface";
import RouterGuard from "./RouterGuard";
import LayoutIndex from "@/layouts";
import LazyComponent from "@/components/Lazy";

const modules = import.meta.glob("@/pages/**/*.tsx") as Record<string, Parameters<typeof lazy>[number]>;

export const convertToDynamicRouterFormat = (authMenuList: RouteObjectType[]) => {
  const flatMenuList = getFlatMenuList(authMenuList);

  const handleMenuList = flatMenuList.map(item => {
    item.children && delete item.children;

    if (item.redirect) item.element = <Navigate to={item.redirect} />;

    if (item.element && typeof item.element == "string") {
      const Component = LazyComponent(lazy(modules["/src/pages" + item.element + ".tsx"]));
      item.element = <RouterGuard>{Component}</RouterGuard>;
    }

    item.loader = () => {
      return { ...item.meta, redirect: !!item.redirect };
    };
    return item;
  });

  const dynamicRouter: RouteObjectType[] = [{ element: <LayoutIndex />, children: [] }];

  handleMenuList.forEach(item => {
    if (item.meta?.isFull) dynamicRouter.push(item);
    else dynamicRouter[0].children?.push(item);
  });

  return dynamicRouter;
};
