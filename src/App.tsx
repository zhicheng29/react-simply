import React, { useEffect } from "react";

import { useSelector, useDispatch } from "@/stores/index.ts";
import { setGlobal } from "@/stores/modules/global.ts";
import { getSystemLanguage } from "@/utils";

import RouterProvider from "@/routers/index.tsx";

import { ConfigProvider, theme, App as AppProvider } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { language, isDark } = useSelector(state => state.global);

  // 初始化主题算法
  const initAlgorithm = () => {
    return isDark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];
  };

  // 初始化语言
  const initLanguage = () => {
    const systemLanguage = language ?? getSystemLanguage();
    dispatch(setGlobal({ key: "language", value: systemLanguage }));
    dayjs.locale(language === "zh" ? "zh-cn" : "en");
  };

  useEffect(() => {
    initLanguage();
  });

  return (
    <ConfigProvider
      locale={language === "zh" ? zhCN : enUS}
      theme={{ algorithm: initAlgorithm(), cssVar: { prefix: "simply" }, hashed: false }}
    >
      <AppProvider>
        <RouterProvider />
      </AppProvider>
    </ConfigProvider>
  );
};
export default App;
