import React, { useLayoutEffect, useState } from "react";

const FullScreen: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = () => {
    const html = document.documentElement;
    fullScreen ? document.exitFullscreen() : html.requestFullscreen();
  };

  const screenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };

  useLayoutEffect(() => {
    document.addEventListener("fullscreenchange", screenChange);
    return () => {
      document.removeEventListener("fullscreenchange", screenChange);
    };
  });

  return <i className={`iconfont ${fullScreen ? "icon-exitfullscreen" : "icon-fullscreen"}`} onClick={handleFullScreen} />;
};

export default FullScreen;
