import React from "react";

import { useDispatch, useSelector } from "@/stores";
import { setGlobal } from "@/stores/modules/global";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const CollapseIcon: React.FC = () => {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector(state => state.global);

  const changeCollapsed = () => {
    dispatch(setGlobal({ key: "isCollapsed", value: !isCollapsed }));
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
