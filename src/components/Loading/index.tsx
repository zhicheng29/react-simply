import React, { useEffect } from "react";
import NProgress from "nprogress";

import { Spin } from "antd";

import "nprogress/nprogress.css";
import "./index.less";

//配置
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});

export const Loading: React.FC = () => {
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  );
};

export const PageLoader: React.FC = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <Loading />;
};
