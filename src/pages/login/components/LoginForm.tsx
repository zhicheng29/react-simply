import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

import { HOMEPATH } from "@/constants/config.ts";

import { useDispatch } from "@/stores/index.ts";
import { loginApi } from "@/api/modules/login";
import { setToken } from "@/stores/modules/user";
import usePermission from "@/hooks/usePermission";
import { message } from "@/hooks/useMessage";

import VerificationCode from "@/components/VerificationCode";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined, CloseCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

import Logo from "@/assets/images/logo.svg";

import type { LoginReqType } from "@/api/interface";
import { setGlobal } from "@/stores/modules/global";

type LoginFormType = {
  username?: string;
  password?: string;
  vcode?: string;
};

const LoginForm: React.FC = () => {
  const key = "loginLoading";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { initPermission } = usePermission();

  const generateRandomString = () => Math.random().toString(36).substring(2, 8);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(generateRandomString());

  const initialFormData: LoginFormType = {
    username: "admin",
    password: "123456",
    vcode: ""
  };

  const changeVCode = () => {
    setCode(generateRandomString());
  };

  const onFinish = async (formData: LoginReqType) => {
    try {
      setLoading(true);
      message.open({ key, type: "loading", content: "登录中" });
      const { data } = await loginApi({ ...formData, password: md5(formData.password) });
      message.open({ key, type: "success", content: "登录成功" });
      dispatch(setToken(data.access_token));
      dispatch(setGlobal({ key: "beginAnimation", value: false }));
      await initPermission(data.access_token);
      navigate(HOMEPATH);
    } finally {
      setLoading(false);
      message.destroy(key);
    }
  };

  return (
    <React.Fragment>
      <div className="login-form-title">
        <img src={Logo} alt="logo" />
        <span>Simply-Admin</span>
      </div>
      <Form name="login" size="large" autoComplete="on" onFinish={onFinish} initialValues={initialFormData}>
        <Form.Item<LoginFormType> name="username" rules={[{ required: true, message: "请输入用户名" }]}>
          <Input allowClear placeholder="用户名" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item<LoginFormType> name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password allowClear placeholder="密码" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item<LoginFormType>
          name="vcode"
          className="login-form-vcodeInput"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <Input allowClear placeholder="验证码" prefix={<SafetyCertificateOutlined />} />
        </Form.Item>
        <div className="login-form-vcode" onClick={changeVCode}>
          <VerificationCode identifyCode={code} />
        </div>
        <Form.Item className="login-form-button">
          <Button shape="round" icon={<CloseCircleOutlined />} htmlType="reset">
            重 置
          </Button>
          <Button type="primary" shape="round" icon={<LoginOutlined />} loading={loading} htmlType="submit">
            登 录
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;
