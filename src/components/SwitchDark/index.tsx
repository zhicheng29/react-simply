import { Button } from "antd";
import { IconFont } from "@/components/Icon";
import { MouseEventHandler } from "react";

const SwitchDark = () => {
  const toggleTheme: MouseEventHandler<HTMLElement> = event => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    let isDark: boolean;

    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains("dark");
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const cliPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...cliPath].reverse() : cliPath
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
        }
      );
    });
  };

  return (
    <Button
      type="text"
      icon={<IconFont style={{ fontSize: 22 }} type="icon-sun" />}
      className="switch-dark-button"
      onClick={toggleTheme}
    />
  );
};

export default SwitchDark;
