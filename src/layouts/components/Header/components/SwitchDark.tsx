import React, { MouseEventHandler } from "react";

import { useSelector, useDispatch } from "@/redux";
import { setTheme } from "@/redux/modules/theme";

const SwitchDark: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(state => state.theme);

  const toggleTheme: MouseEventHandler<HTMLElement> = () => {
    dispatch(setTheme({ key: "isDark", value: !isDark }));
  };

  return <i className={`iconfont ${isDark ? "icon-moon" : "icon-sun"}`} onClick={toggleTheme} />;
};

export default SwitchDark;
