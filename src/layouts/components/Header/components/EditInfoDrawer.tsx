import React, { useImperativeHandle, useState, forwardRef } from "react";
import { Button, Drawer, Form, Input } from "antd";
import { message } from "@/hooks/useMessage";

export interface EditInfoDrawerRef {
  openDrawer: (params?: Record<string, any>) => void;
  closeDrawer: (params?: Record<string, any>) => void;
}

const EditInfoDrawer = forwardRef<EditInfoDrawerRef, {}>((_, ref) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const submit = () => {
    message.success("保存成功");
  };

  useImperativeHandle(ref, () => ({ openDrawer, closeDrawer }));

  return (
    <React.Fragment>
      <Drawer
        title="个人信息"
        open={open}
        onClose={closeDrawer}
        destroyOnClose={true}
        extra={
          <Button onClick={submit} type="primary">
            保存
          </Button>
        }
      >
        <Form layout="vertical">
          <Form.Item name="name" label="旧密码" rules={[{ required: true, message: "请输入旧密码" }]}>
            <Input placeholder="请输入旧密码" />
          </Form.Item>
          <Form.Item name="name" label="新密码" rules={[{ required: true, message: "请输入新密码" }]}>
            <Input placeholder="请输入新密码" />
          </Form.Item>
          <Form.Item name="url" label="确认新密码" rules={[{ required: true, message: "请再次输入新密码" }]}>
            <Input placeholder="请再次输入新密码" />
          </Form.Item>
        </Form>
      </Drawer>
    </React.Fragment>
  );
});

export default EditInfoDrawer;
