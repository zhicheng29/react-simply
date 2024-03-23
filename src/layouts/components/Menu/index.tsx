import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Layout } from "antd";

import logo from "@/assets/images/logo.svg";

import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")])
  ])
];

const LayoutMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = e => {
    console.log("click ", e);
  };

  return (
    <Sider className="layout-sider">
      <div className="layout-logo-container">
        <img src={logo} alt="logo"></img>
        <h2>Simply Admin</h2>
      </div>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className="layout-menu"
      />
    </Sider>
  );
};

export default LayoutMenu;
