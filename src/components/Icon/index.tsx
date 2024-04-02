import React from "react";
import * as Icons from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";

interface IconProps {
  IconName: string;
  className?: string;
}

export const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/c/font_4455947_wjb8l098rl.js"]
});

export const Icon: React.FC<IconProps> = ({ IconName, className }) => {
  const customIcons: { [key: string]: any } = Icons;
  if (!IconName) return;
  return React.createElement(customIcons[IconName], { className });
};
