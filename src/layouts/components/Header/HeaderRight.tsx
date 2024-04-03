import React from "react";

import Screen from "./components/Screen.tsx";
import SwitchDark from "./components/SwitchDark.tsx";
import Language from "./components/Language.tsx";
import AvatarCom from "./components/Avatar.tsx";

import "./index.less";

const HeaderRight: React.FC = () => {
  return (
    <div className="layout-header-right">
      <div className="layout-header-right-icon">
        <SwitchDark />
        <Language />
        <Screen />
      </div>
      <div className="layout-header-right-user">
        <span className="user-name">USER</span>
        <AvatarCom />
      </div>
    </div>
  );
};

export default HeaderRight;
