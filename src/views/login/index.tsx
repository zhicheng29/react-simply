import { useState } from "react";

import Welcome from "./components/Welcome.tsx";
import LoginForm from "./components/LoginForm.tsx";
import SwitchDark from "@/components/SwitchDark/index.tsx";

import ImgUrl from "@/assets/images/login_form_img.png";

import "./index.less";

const Login: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="lint-container">
      <Welcome showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
      <div className={["login-container", showWelcome ? "" : "show-login"].join(" ")}>
        <SwitchDark />
        <div className="login-content">
          <div className="login-form-image">
            <img src={ImgUrl}></img>
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
