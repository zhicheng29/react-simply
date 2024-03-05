import type { RouteObject } from "react-router-dom";

export interface MetaProps {
  title?: string;
}

export type RouteObjectType = Omit<RouteObject, "children"> & {
  redirect?: string;
  meta?: MetaProps;
  children?: RouteObjectType[];
};
