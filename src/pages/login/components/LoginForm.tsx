import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import md5 from "md5";

import { loginApi } from "@/api/modules/login";
import { setToken } from "@/store/modules/user";

import VerificationCode from "@/components/VerificationCode";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined, CloseCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

import type { LoginReqType } from "@/api/interface";

type LoginFormType = {
  username?: string;
  password?: string;
  vcode?: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const generateRandomString = () => Math.random().toString(36).substring(2, 8);
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
    const { data } = await loginApi({ ...formData, password: md5(formData.password) });
    dispatch(setToken(data.access_token));
    navigate("/home", { replace: true });
  };

  return (
    <>
      <h1>Simply-Admin</h1>
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
          <Button type="primary" shape="round" icon={<LoginOutlined />} htmlType="submit">
            登 录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
