import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import { useSelector } from "@/redux";

import type { RootStateType } from "@/redux";

const useTheme = () => {
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

  useEffect(switchDark, [isDark]);
};

export default useTheme;
