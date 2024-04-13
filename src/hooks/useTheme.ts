import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/redux";
import { globalTheme } from "@/styles/theme/global";
import { preloadVarCss } from "@/constants/config";

import theme from "antd/es/theme";

import type { RootStateType } from "@/redux";

type ThemeType = "light" | "dark";

const useTheme = () => {
  const { token } = theme.useToken();
  const { isDark } = useSelector(
    (state: RootStateType) => ({
      isDark: state.theme.isDark,
      themeColor: state.theme.themeColor
    }),
    shallowEqual
  );

  const changePrimary = () => {
    const html = document.documentElement;
    const type: ThemeType = isDark ? "dark" : "light";
    Object.entries(globalTheme[type]).forEach(([key, val]) => html.style.setProperty(`--simply-${key}`, val));
    Object.entries(token).forEach(([key, val]) => {
      if (preloadVarCss.includes(key)) {
        html.style.setProperty(`--simply-${key}`, val);
      }
    });
  };

  const switchDark = () => {
    const html = document.documentElement;
    html.setAttribute("class", isDark ? "dark" : "light");
    changePrimary();
  };

  useEffect(changePrimary, []);
  useEffect(switchDark, [isDark]);
};

export default useTheme;
