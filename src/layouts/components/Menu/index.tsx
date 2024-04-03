import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "@/stores";

import { Menu } from "antd";
// import { IconFont } from "@/components/Icon";

import "./index.less";

import type { MenuProps } from "antd";
import type { RootStateType } from "@/stores";
import type { RouteObjectType } from "@/routers/interface";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu: React.FC = () => {
  const [selectKeys, setSelectKeys] = useState<string[]>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useSelector(state => state.global);
  const menuList = useSelector((state: RootStateType) => state.auth.authMenuList);

  useEffect(() => {
    const path = location.pathname;
    setSelectKeys([path]);
  }, [location]);

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return { key, icon, children, label, type } as MenuItem;
  };

  // 转换菜单数据
  const handleMenuFormat = (menu: RouteObjectType[]): MenuItem[] => {
    return menu.map(item => {
      return item.children?.length
        ? getItem(item.meta?.title, item.path, <i className={`iconfont ${item.meta!.icon!}`} />, handleMenuFormat(item.children))
        : getItem(item.meta?.title, item.path, <i className={`iconfont ${item.meta!.icon!}`} />);
    });
  };

  const clickMenu: MenuProps["onClick"] = val => {
    const { key } = val;
    navigate(key);
  };

  const authMenuList = handleMenuFormat(menuList);

  return (
    <Menu
      mode="inline"
      className="layout-menu"
      theme={isDark ? "dark" : "light"}
      onClick={clickMenu}
      items={authMenuList}
      selectedKeys={selectKeys}
    />
  );
};

export default LayoutMenu;
