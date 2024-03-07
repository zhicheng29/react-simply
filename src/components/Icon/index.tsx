import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

interface IconProps {
  IconName: string;
  className?: string;
}

export const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/c/font_4455947_wjb8l098rl.js"]
});

export const Icon: React.FC<IconProps> = ({ IconName, className }) => {
  return <IconFont type={IconName} className={className} />;
};
