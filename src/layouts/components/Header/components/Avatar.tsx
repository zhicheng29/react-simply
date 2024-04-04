import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { LOGINPATH } from "@/constants/config";

import { useDispatch } from "@/stores";
import { setToken } from "@/stores/modules/user";
import { clearAuthList } from "@/stores/modules/auth";
import { message, modal } from "@/hooks/useMessage";

import EditPassDrawer from "./EditPassDrawer";
import EditInfoDrawer from "./EditInfoDrawer";
import { Avatar, Dropdown } from "antd";
import { LoginOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import type { EditPassDrawerRef } from "./EditPassDrawer";
import type { EditInfoDrawerRef } from "./EditInfoDrawer";

const AvatarCom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editPassDrawerRef = useRef<EditPassDrawerRef>(null);
  const editInfoDrawerRef = useRef<EditInfoDrawerRef>(null);

  const handleLogout = () => {
    modal.confirm({
      title: "提示",
      content: "是否确认要退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        dispatch(setToken(""));
        dispatch(clearAuthList());
        navigate(LOGINPATH);
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
        <Avatar size={40} className="avatar">
          USER
        </Avatar>
      </Dropdown>
      <EditPassDrawer ref={editPassDrawerRef} />
      <EditInfoDrawer ref={editInfoDrawerRef} />
    </React.Fragment>
  );
};

export default AvatarCom;
