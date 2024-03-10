import React, { useLayoutEffect, useCallback, useRef } from "react";

import SmokeVideo from "@/assets/videos/smoke.mp4";

interface WelcomeProps {
  showWelcome: boolean;
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome = ({ showWelcome, setShowWelcome }: WelcomeProps) => {
  const welcomeRef = useRef<HTMLDivElement | null>(null);

  const setAnimation = useCallback(() => {
    setShowWelcome(false);
  }, [setShowWelcome]);

  useLayoutEffect(() => {
    const welcomeElement = welcomeRef.current;
    if (!welcomeElement) return;
    welcomeElement.addEventListener("dblclick", setAnimation);
    return () => {
      welcomeElement.removeEventListener("dblclick", setAnimation);
    };
  }, [setAnimation]);

  return (
    <div className={["welcome-container", showWelcome ? "" : "hidden-welcome"].join(" ")} ref={welcomeRef}>
      <video autoPlay muted playsInline preload="true">
        <source src={SmokeVideo} type="video/mp4" />
        您的浏览器暂不支持 video 标签
      </video>
      <div className="text-content">
        <span className="text-word">H</span>
        <span className="text-word">e</span>
        <span className="text-word">l</span>
        <span className="text-word">l</span>
        <span className="text-word">o&nbsp;</span>
        <span className="text-word">&nbsp;W</span>
        <span className="text-word">o</span>
        <span className="text-word">r</span>
        <span className="text-word">l</span>
        <span className="text-word">d</span>

        <div className="border-box"></div>
        <div className="border-box"></div>
        <div className="border-box"></div>
        <div className="border-box"></div>
      </div>

      <div className="btn-content" onClick={setAnimation}>
        <div className="btn-box">
          <div className="btn-text">
            <span>欢迎进入</span>
          </div>
          <div className="btn-bird">
            <div className={["bird-item", "bard-wakeup"].join(" ")}>
              <div className="bird-face"></div>
            </div>
            <div className={["bird-item", "bard-wakeup"].join(" ")}>
              <div className="bird-face"></div>
            </div>
            <div className="bird-item">
              <div className="bird-face"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
