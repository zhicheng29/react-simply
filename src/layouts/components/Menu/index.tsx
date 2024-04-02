import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "@/stores";

import { Menu, Layout } from "antd";
import { Icon } from "@/components/Icon";

import logo from "@/assets/images/logo.svg";

import "./index.less";

import type { MenuProps } from "antd";
import type { RootStateType } from "@/stores";
import type { RouteObjectType } from "@/routers/interface";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu: React.FC = () => {
  const [selectKeys, setSelectKeys] = useState<string[]>([]);

  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();
  const menuList = useSelector((state: RootStateType) => state.authMenu.authMenuList);

  useEffect(() => {
    const path = location.pathname;
    setSelectKeys([path]);
  }, [location]);

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return { key, icon, children, label, type } as MenuItem;
  }

  // 转换菜单数据
  const handleMenuFormat = (menu: RouteObjectType[]): MenuItem[] => {
    return menu.map(item => {
      return item.children?.length
        ? getItem(item.meta?.title, item.path, <Icon IconName={item.meta!.icon!} />, handleMenuFormat(item.children))
        : getItem(item.meta?.title, item.path, <Icon IconName={item.meta!.icon!} />);
    });
  };

  const authMenuList = handleMenuFormat(menuList);

  const clickMenu: MenuProps["onClick"] = val => {
    const { key } = val;
    navigate(key);
  };

  return (
    <Sider className="layout-sider">
      <div className="layout-logo-container">
        <img src={logo} alt="logo"></img>
        <h2>Simply Admin</h2>
      </div>
      <Menu mode="inline" onClick={clickMenu} selectedKeys={selectKeys} items={authMenuList} className="layout-menu" />
    </Sider>
  );
};

export default LayoutMenu;
