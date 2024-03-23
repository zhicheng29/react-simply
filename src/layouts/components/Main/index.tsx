import React from "react";
import { useOutlet } from "react-router-dom";

import { Layout } from "antd";

import "./index.less";

const { Content } = Layout;

const LayoutMain: React.FC = () => {
  const outlet = useOutlet();
  return (
    <Content className="layout-main">
      <div className="layout-main-container">{outlet}</div>
    </Content>
  );
};

export default LayoutMain;
