import React from "react";

import { Layout } from "antd";

import "./index.less";

const { Footer } = Layout;

const APP_TITLE = import.meta.env.VITE_APP_TITLE;

const LayoutFooter: React.FC = () => {
  return (
    <React.Fragment>
      <Footer className="layout-footer">
        <a href="https://github.com/zhicheng29" target="_blank">
          2024 © {APP_TITLE} By Simply Technology.
        </a>
      </Footer>
    </React.Fragment>
  );
};

export default LayoutFooter;
