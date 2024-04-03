import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/stores/index.ts";
import { globalTheme } from "@/styles/theme/global";
import { setStyleProperty } from "@/utils";

import { preloadVarCss } from "@/constants/config.ts";

import type { RootStateType } from "src/stores";

import { theme } from "antd";

const useTheme = () => {
  const { token } = theme.useToken();

  const { isDark } = useSelector(
    (state: RootStateType) => ({
      isDark: state.global.isDark,
      themeColor: state.global.themeColor
    }),
    shallowEqual
  );

  const changePrimary = () => {
    const type = isDark ? "dark" : "light";
    Object.entries(globalTheme[type]).forEach(([key, val]) => setStyleProperty(key, val));
    Object.entries(token).forEach(([key, val]) => {
      if (preloadVarCss.includes(key)) {
        setStyleProperty(`--simply-${key}`, val);
      }
    });
  };

  useEffect(changePrimary, [isDark]);
};

export default useTheme;
