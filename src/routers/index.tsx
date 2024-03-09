import { RouterProvider as Router, createHashRouter } from "react-router-dom";

import { staticRouters } from "@/routers/modules/staticRouters";

import type { RouteObject } from "react-router-dom";

const router = createHashRouter(staticRouters as RouteObject[]);

const RouterProvider: React.FC = () => {
  return (
    <>
      <Router router={router} />
    </>
  );
};

export default RouterProvider;
