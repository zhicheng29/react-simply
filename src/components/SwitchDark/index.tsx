import React, { MouseEventHandler } from "react";

import { useSelector, useDispatch } from "@/redux";
import { setTheme } from "@/redux/modules/theme";

const SwitchDark: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark: dark } = useSelector(state => state.theme);

  // 切换主题函数
  const toggleTheme: MouseEventHandler<HTMLElement> = event => {
    let isDark: boolean;
    // 鼠标 x 坐标
    const x = event.clientX;
    // 鼠标 y 坐标
    const y = event.clientY;
    // 圆形遮罩动画的结束半径
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      // 判断根组件是否包含 dark 类，是否为暗黑模式
      isDark = root.classList.contains("dark");
      dispatch(setTheme({ key: "isDark", value: !isDark }));
      // 移除 dark 或 light 类
      root.classList.remove(isDark ? "dark" : "light");
      // 添加 dark 或 light 类
      root.classList.add(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const cliPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...cliPath].reverse() : cliPath // 根据主题切换动画的路径
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
        }
      );
    });
  };

  return <i className={`layout-header-icon iconfont ${dark ? "icon-moon" : "icon-sun"}`} onClick={toggleTheme} />;
};

export default SwitchDark;
