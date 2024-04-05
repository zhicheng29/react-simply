import React, { useState } from "react";

import Welcome from "@/pages/login/components/Welcome.tsx";
import LoginForm from "@/pages/login/components/LoginForm.tsx";

import ImgUrl from "@/assets/images/login_form_img.png";

import "./index.less";
import { useSelector } from "@/stores";

const Login: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const { beginAnimation } = useSelector(state => state.theme);

  return (
    <div className="lint-container">
      {beginAnimation && <Welcome showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
      <div className={`login-container ${showWelcome ? "" : "show-login"} ${!beginAnimation ? "hidden-animation" : ""}`}>
        <div className="login-content">
          <div className="login-illustration">
            <img src={ImgUrl} alt="illustration"></img>
          </div>
          <div className="login-form-content">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
