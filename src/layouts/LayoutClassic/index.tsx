import React from "react";

import LayoutHeader from "@/layouts/components/Header/index.tsx";
import LayoutMenu from "@/layouts/components/Menu/index.tsx";
import LayoutTabs from "@/layouts/components/Tabs/index.tsx";
import LayoutMain from "@/layouts/components/Main/index.tsx";
import LayoutFooter from "@/layouts/components/Footer/index.tsx";

import { Layout } from "antd";

import "./index.less";

const LayoutClassic: React.FC = () => {
  return (
    <section className="layout-classic">
      <Layout>
        <LayoutMenu />
        <Layout>
          <LayoutHeader />
          <LayoutTabs />
          <LayoutMain />
          <LayoutFooter />
        </Layout>
      </Layout>
    </section>
  );
};

export default LayoutClassic;
