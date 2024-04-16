import React, { useRef } from "react";

import { message, modal } from "@/hooks/useMessage";
import { logout } from "@/utils";

import EditPassDrawer from "./EditPassDrawer";
import EditInfoDrawer from "./EditInfoDrawer";
import { Avatar, Dropdown } from "antd";
import { LoginOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";

import avatar from "@/assets/images/avatar.png";

import type { MenuProps } from "antd";
import type { EditPassDrawerRef } from "./EditPassDrawer";
import type { EditInfoDrawerRef } from "./EditInfoDrawer";

const AvatarCom: React.FC = () => {
  const editPassDrawerRef = useRef<EditPassDrawerRef>(null);
  const editInfoDrawerRef = useRef<EditInfoDrawerRef>(null);

  const handleLogout = () => {
    modal.confirm({
      title: "提示",
      content: "是否确认要退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: async () => {
        await logout();
        message.success("已退出登录");
      }
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "userInfo",
      label: <span>个人信息</span>,
      icon: <UserOutlined />,
      onClick: () => editInfoDrawerRef.current?.openDrawer()
    },
    {
      key: "editPass",
      label: <span>修改密码</span>,
      icon: <EditOutlined />,
      onClick: () => editPassDrawerRef.current?.openDrawer()
    },
    {
      type: "divider"
    },
    {
      key: "logout",
      label: <span>退出登录</span>,
      icon: <LoginOutlined />,
      onClick: handleLogout
    }
  ];

  return (
    <React.Fragment>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Avatar src={avatar} size={34} className="avatar"></Avatar>
      </Dropdown>
      <EditPassDrawer ref={editPassDrawerRef} />
      <EditInfoDrawer ref={editInfoDrawerRef} />
    </React.Fragment>
  );
};

export default AvatarCom;
