import React, { useEffect } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "@/redux";
import { addTabItem, deleteTabItem } from "@/redux/modules/tabs";

import { Tabs } from "antd";

import "./index.less";

import type { MetaProps } from "@/routers/interface";

const LayoutTabs: React.FC = () => {
  const { pathname: path } = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();
  const dispatch = useDispatch();

  const tabsList = useSelector(state => state.tab);

  const initTabs = () => {
    const meta = matches[matches.length - 1].data as MetaProps;
    const tab = {
      title: meta.title!,
      icon: meta.icon!,
      path: path,
      closable: !!meta.closable
    };
    dispatch(addTabItem(tab));
  };

  const tabItems = tabsList.map(item => {
    return {
      key: item.path,
      label: (
        <React.Fragment>
          {<i className={`iconfont ${item.icon}`} />}
          {item.title}
        </React.Fragment>
      ),
      closable: item.closable
    };
  });

  const onEdit = (
    targetKey: string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    action: "add" | "remove"
  ) => {
    if (action === "remove") {
      dispatch(deleteTabItem(targetKey as string));
      // 异步执行，此处无法获取最新的 state
      console.log(tabsList[tabsList.length - 1].path);

      // navigate(tabsList[tabsList.length - 1].path);
    }
  };
  const onChange = (key: string) => {
    navigate(key);
  };

  useEffect(() => initTabs(), [matches]);

  return (
    <Tabs
      hideAdd
      size="middle"
      type="editable-card"
      className="layout-tab"
      activeKey={path}
      items={tabItems}
      onEdit={onEdit}
      onChange={onChange}
    />
  );
};

export default LayoutTabs;
