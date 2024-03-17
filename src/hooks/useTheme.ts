import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/store/index.ts";
import { globalTheme } from "@/styles/theme/global";
import { setStyleProperty } from "@/utils/theme";

import type { RootStateType } from "@/store";

// import { theme } from "antd";

const useTheme = () => {
  // const { token } = theme.useToken();

  const { isDark } = useSelector(
    (state: RootStateType) => ({
      isDark: state.theme.isDark,
      themeColor: state.theme.themeColor
    }),
    shallowEqual
  );

  const changePrimary = () => {
    const type = isDark ? "dark" : "light";
    Object.entries(globalTheme[type]).forEach(([key, val]) => setStyleProperty(key, val));
    // Object.entries(token).forEach(([key, val]) => setStyleProperty(`--symbol-${key}`, val));
  };

  useEffect(changePrimary, [isDark]);
};

export default useTheme;
