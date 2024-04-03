import React from "react";

import Menu from "@/layouts/components/Menu/index.tsx";
import Tabs from "@/layouts/components/Tabs/index.tsx";
import Main from "@/layouts/components/Main/index.tsx";
import Footer from "@/layouts/components/Footer/index.tsx";

const LayoutColumn: React.FC = () => {
  return (
    <div>
      列布局
      <Menu />
      <Tabs />
      <Main />
      <Footer />
    </div>
  );
};

export default LayoutColumn;
