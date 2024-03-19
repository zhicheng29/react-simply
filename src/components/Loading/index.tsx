import React from "react";

import { Spin } from "antd";

import "./index.less";

export const Loading: React.FC = () => {
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  );
};
