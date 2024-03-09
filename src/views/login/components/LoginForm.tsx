import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined, CloseCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import VerificationCode from "@/components/VerificationCode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  vcode?: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const generateRandomString = () => Math.random().toString(36).substring(2, 8);

  const [code, setCode] = useState(generateRandomString());

  const changeVCode = () => {
    setCode(generateRandomString());
  };

  const validatorVcode = (value: string) => {
    if (!value) {
      return Promise.reject("请输入验证码");
    } else if (value.toLocaleLowerCase() !== code.toLocaleLowerCase()) {
      return Promise.reject("验证码错误");
    } else {
      return Promise.resolve();
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
    navigate("/home", { replace: true });
  };

  return (
    <>
      <h1>Simply-Admin</h1>
      <Form name="login" size="large" onFinish={onFinish} autoComplete="off">
        <Form.Item<FieldType> name="username" rules={[{ required: true, message: "请输入用户名" }]}>
          <Input allowClear placeholder="用户名" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item<FieldType> name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password allowClear placeholder="密码" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item<FieldType>
          name="vcode"
          className="login-form-vcodeInput"
          validateTrigger="onBlur"
          rules={[{ validator: (_rule, value) => validatorVcode(value) }]}
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
