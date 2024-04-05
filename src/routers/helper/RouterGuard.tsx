import React, { useEffect } from "react";
import { useSelector } from "@/stores";
import { MetaProps } from "@/routers/interface";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { HOMEPATH, LOGINPATH } from "@/constants/config.ts";

import type { RootStateType } from "@/stores";

interface RouterGuardProps {
  children: React.ReactNode;
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  window.$navigate = navigate;

  const token = useSelector((state: RootStateType) => state.user.token);
  const authMenuList = useSelector((state: RootStateType) => state.auth.authMenuList);

  useEffect(() => {
    const meta = loader as MetaProps;
    const isLoginPage = pathname === LOGINPATH;

    if (meta) {
      const title = import.meta.env.VITE_APP_TITLE;
      document.title = meta?.title ? `${meta.title} - ${title}` : title;
    }

    if (authMenuList.length && token && isLoginPage) {
      return navigate(HOMEPATH);
    }

    if ((!token && !isLoginPage) || (!authMenuList.length && !token && !isLoginPage)) {
      return navigate(LOGINPATH, { replace: true });
    }
  }, [loader]);

  return props.children;
};

export default RouterGuard;
