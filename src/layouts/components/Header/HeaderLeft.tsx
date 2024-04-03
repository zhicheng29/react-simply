import React from "react";

import CollapseIcon from "./components/CollapseIcon";

import "./index.less";

const HeaderLeft: React.FC = () => {
  return (
    <div className="layout-header-left">
      <CollapseIcon />
    </div>
  );
};

export default HeaderLeft;
