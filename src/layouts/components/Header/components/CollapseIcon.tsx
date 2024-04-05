import React from "react";

import { useDispatch, useSelector } from "@/stores";
import { setTheme } from "@/stores/modules/theme";

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
        className: "collapse-icon",
        onClick: changeCollapsed
      })}
    </React.Fragment>
  );
};

export default CollapseIcon;
