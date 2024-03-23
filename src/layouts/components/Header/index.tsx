import React from "react";

import { Layout } from "antd";

import "./index.less";

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
  return <Header className="layout-header">Header</Header>;
};

export default LayoutHeader;
