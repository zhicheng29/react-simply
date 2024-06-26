import React from "react";

import { useSelector } from "@/redux";

import { Layout } from "antd";
import HeaderRight from "@/layouts/components/Header/HeaderRight";
import HeaderLeft from "@/layouts/components/Header/HeaderLeft";
import LayoutMenu from "@/layouts/components/Menu/index.tsx";
import LayoutTabs from "@/layouts/components/Tabs/index.tsx";
import LayoutMain from "@/layouts/components/Main/index.tsx";
import LayoutFooter from "@/layouts/components/Footer/index.tsx";

import logo from "@/assets/images/logo.svg";

import "./index.less";

const LayoutClassic: React.FC = () => {
  const { Sider, Header } = Layout;
  const { isCollapsed } = useSelector(state => state.theme);
  return (
    <section className="layout-classic">
      <Sider width={210} collapsed={isCollapsed}>
        <div className="layout-logo-container">
          <img src={logo} alt="logo" className="layout-logo-img"></img>
          <h2 className={`layout-logo-title ${isCollapsed ? "hide-title" : ""}`}>Simply Admin</h2>
        </div>
        <LayoutMenu />
      </Sider>
      <Layout>
        <Header>
          <HeaderLeft />
          <HeaderRight />
        </Header>
        <LayoutTabs />
        <LayoutMain />
        <LayoutFooter />
      </Layout>
    </section>
  );
};

export default LayoutClassic;
