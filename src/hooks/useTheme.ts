import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/redux";
import theme from "antd/es/theme";

import type { RootStateType } from "@/redux";
import { preloadVarCss } from "@/constants/config";

const useTheme = () => {
  const { token } = theme.useToken();
  const { isDark } = useSelector(
    (state: RootStateType) => ({
      isDark: state.theme.isDark,
      themeColor: state.theme.themeColor
    }),
    shallowEqual
  );

  const switchDark = () => {
    const html = document.documentElement;
    html.setAttribute("class", isDark ? "dark" : "light");
  };

  const changePrimary = () => {
    const html = document.documentElement;
    Object.entries(token).forEach(([key, val]) => {
      if (preloadVarCss.includes(key)) {
        html.style.setProperty(`--simply-${key}`, val);
      }
    });
  };

  useEffect(changePrimary, []);
  useEffect(switchDark, [isDark]);
};

export default useTheme;
