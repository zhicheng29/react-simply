import React from "react";

import FullScreen from "./components/FullScreen.tsx";
import Language from "./components/Language.tsx";
import AvatarCom from "./components/Avatar.tsx";
import SwitchDark from "@/components/SwitchDark";

import "./index.less";

const HeaderRight: React.FC = () => {
  return (
    <div className="layout-header-right">
      <div className="layout-header-right-icon">
        <SwitchDark />
        <Language />
        <FullScreen />
      </div>
      <div className="layout-header-right-user">
        <span className="user-name">USER</span>
        <AvatarCom />
      </div>
    </div>
  );
};

export default HeaderRight;
