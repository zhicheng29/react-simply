import React from "react";

import { useDispatch, useSelector } from "@/redux";
import { setTheme } from "@/redux/modules/theme";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const CollapseIcon: React.FC = () => {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector(state => state.theme);

  const changeCollapsed = () => {
    dispatch(setTheme({ key: "isCollapsed", value: !isCollapsed }));
  };
  return (
    <React.Fragment>
      {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "collapse-icon layout-header-icon",
        onClick: changeCollapsed
      })}
    </React.Fragment>
  );
};

export default CollapseIcon;
