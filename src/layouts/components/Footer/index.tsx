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
          Copyright © {APP_TITLE} 2024 by wacko
        </a>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          赣ICP备2023002554号-2
        </a>
      </Footer>
    </React.Fragment>
  );
};

export default LayoutFooter;
