import React, { MouseEventHandler } from "react";

import { useSelector, useDispatch } from "@/stores/index.ts";
import { setGlobal } from "@/stores/modules/global.ts";

const SwitchDark: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(state => state.global);

  const toggleTheme: MouseEventHandler<HTMLElement> = () => {
    dispatch(setGlobal({ key: "isDark", value: !isDark }));
  };

  return <i className={`iconfont ${isDark ? "icon-moon" : "icon-sun"}`} onClick={toggleTheme} />;
};

export default SwitchDark;
