import React from "react";

import LayoutMenu from "@/layouts/components/Menu/index.tsx";
import LayoutTabs from "@/layouts/components/Tabs/index.tsx";
import LayoutMain from "@/layouts/components/Main/index.tsx";
import LayoutFooter from "@/layouts/components/Footer/index.tsx";

const LayoutHorizontal: React.FC = () => {
  return (
    <div>
      横布局
      <LayoutMenu />
      <LayoutTabs />
      <LayoutMain />
      <LayoutFooter />
    </div>
  );
};

export default LayoutHorizontal;
