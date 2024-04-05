import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

import { HOMEPATH } from "@/constants/config.ts";

import { useDispatch } from "@/redux";
import { loginApi } from "@/api/modules/login";
import { setToken } from "@/redux/modules/user";
import { setTheme } from "@/redux/modules/theme";
import { message } from "@/hooks/useMessage";
import usePermission from "@/hooks/usePermission";

import VerificationCode from "@/components/VerificationCode";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined, CloseCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

import Logo from "@/assets/images/logo.svg";

import type { LoginReqType } from "@/api/interface";
import type { RuleObject } from "antd/es/form";

type LoginFormType = {
  username?: string;
  password?: string;
  vcode?: string;
};

const LoginForm: React.FC = () => {
  const key = "loginLoading";
  const [loginForm] = Form.useForm();
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
    // setFieldValue 无法重置校验信息
    loginForm.setFieldsValue({ vcode: "" });
  };

  const validateVCode = (_rule: RuleObject, value: string | undefined) => {
    if (!value) return Promise.reject(new Error("请输入验证码"));
    if (value.toLowerCase() !== code) return Promise.reject(new Error("验证码错误"));
    return Promise.resolve();
  };

  const onFinish = async (formData: LoginReqType) => {
    try {
      setLoading(true);
      message.open({ key, type: "loading", content: "登录中" });
      const { data } = await loginApi({ ...formData, password: md5(formData.password) });
      dispatch(setToken(data.access_token));
      dispatch(setTheme({ key: "beginAnimation", value: false }));
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
      <Form form={loginForm} name="login" size="large" autoComplete="on" onFinish={onFinish} initialValues={initialFormData}>
        <Form.Item<LoginFormType> name="username" rules={[{ required: true, message: "请输入用户名" }]}>
          <Input allowClear placeholder="用户名" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item<LoginFormType> name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password allowClear placeholder="密码" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item<LoginFormType> name="vcode" className="login-form-vcodeInput" rules={[{ validator: validateVCode }]}>
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
