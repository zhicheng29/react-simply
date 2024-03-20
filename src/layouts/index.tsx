import React from "react";

import { useSelector } from "@/stores";

import LayoutClassic from "@/layouts/LayoutClassic";
import LayoutHorizontal from "@/layouts/LayoutHorizontal";
import LayoutVertical from "@/layouts/LayoutVertical";
import LayoutColumn from "@/layouts/LayoutColumn";

import type { RootStateType } from "@/stores";

const layoutComponents = {
  classic: <LayoutClassic />,
  horizontal: <LayoutHorizontal />,
  vertical: <LayoutVertical />,
  column: <LayoutColumn />
};

const LayoutIndex: React.FC = () => {
  const layout = useSelector((state: RootStateType) => state.theme.layout);
  return <div>{layoutComponents[layout]}</div>;
};

export default LayoutIndex;
