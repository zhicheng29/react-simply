import React, { useState } from "react";

const Screen: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const ChangeFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return <i className={`iconfont ${fullScreen ? "icon-exitfullscreen" : "icon-fullscreen"}`} onClick={ChangeFullScreen} />;
};

export default Screen;
