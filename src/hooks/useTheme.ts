import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/stores/index.ts";

import type { RootStateType } from "src/stores";

const useTheme = () => {
  const { isDark } = useSelector(
    (state: RootStateType) => ({
      isDark: state.global.isDark,
      themeColor: state.global.themeColor
    }),
    shallowEqual
  );

  const switchDark = () => {
    const html = document.documentElement;
    html.setAttribute("class", isDark ? "dark" : "light");
  };

  useEffect(switchDark, [isDark]);
};

export default useTheme;
