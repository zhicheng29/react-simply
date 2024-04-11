import React from "react";

import { useSelector } from "@/redux/index.ts";

import FullScreen from "./components/FullScreen.tsx";
import Language from "./components/Language.tsx";
import AvatarCom from "./components/Avatar.tsx";
import SwitchDark from "@/components/SwitchDark";

import "./index.less";

const HeaderRight: React.FC = () => {
  const { name } = useSelector((state: any) => state.user.userInfo);
  return (
    <div className="layout-header-right">
      <div className="layout-header-right-icon">
        <SwitchDark />
        <Language />
        <FullScreen />
      </div>
      <div className="layout-header-right-user">
        <span className="user-name">{name}</span>
        <AvatarCom />
      </div>
    </div>
  );
};

export default HeaderRight;
