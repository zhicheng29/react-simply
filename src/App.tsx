import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/modules/theme";
import { getSystemLanguage } from "@/utils/theme";
import RouterProvider from "@/routers/index";
import { ConfigProvider, theme } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { RootStateType } from "@/store";

const App: React.FC = () => {
  const { language, isDark } = useSelector((state: RootStateType) => state.theme);
  const dispatch = useDispatch();

  const initAlgorithm = () => {
    return isDark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];
  };

  const initLanguage = () => {
    const systemLanguage = language ?? getSystemLanguage();
    dispatch(setTheme({ key: "language", value: systemLanguage }));
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
      <RouterProvider />
    </ConfigProvider>
  );
};
export default App;
