import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";

import { useSelector } from "@/stores";

import logo from "@/assets/images/logo.svg";

import "./index.less";

import type { MenuProps } from "antd";
import type { RootStateType } from "@/stores";
import type { RouteObjectType } from "@/routers/interface";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu: React.FC = () => {
  const { Sider } = Layout;

  const menuList = useSelector((state: RootStateType) => state.authMenu.authMenuList);

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
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

  const handleMenuFormat = (menu: RouteObjectType[]): MenuItem[] => {
    return menu.map(item => {
      return item.children?.length
        ? getItem(item.meta?.title, item.path, <AppstoreOutlined />, handleMenuFormat(item.children))
        : getItem(item.meta?.title, item.path);
    });
  };

  const authMenuList = handleMenuFormat(menuList);

  const onClick: MenuProps["onClick"] = e => {
    console.log("click ", e);
  };

  return (
    <Sider className="layout-sider">
      <div className="layout-logo-container">
        <img src={logo} alt="logo"></img>
        <h2>Simply Admin</h2>
      </div>
      <Menu onClick={onClick} mode="inline" items={authMenuList} className="layout-menu" />
    </Sider>
  );
};

export default LayoutMenu;
