import React from "react";

import { useSelector } from "@/redux";

import LayoutClassic from "@/layouts/LayoutClassic";
import LayoutHorizontal from "@/layouts/LayoutHorizontal";
import LayoutVertical from "@/layouts/LayoutVertical";
import LayoutColumn from "@/layouts/LayoutColumn";

import "./index.less";

import type { RootStateType } from "@/redux";

const layoutComponents = {
  classic: <LayoutClassic />,
  horizontal: <LayoutHorizontal />,
  vertical: <LayoutVertical />,
  column: <LayoutColumn />
};

const LayoutIndex: React.FC = () => {
  const layout = useSelector((state: RootStateType) => state.theme.layout);
  return <React.Fragment>{layoutComponents[layout]}</React.Fragment>;
};

export default LayoutIndex;
