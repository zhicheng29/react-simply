import React from "react";
import { useDispatch, useSelector } from "@/stores";
import { setGlobal } from "@/stores/modules/global.ts";
import { message } from "@/hooks/useMessage";

const Language: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.global);

  const changeLanguage = () => {
    dispatch(setGlobal({ key: "language", value: language === "zh" ? "en" : "zh" }));
    // dispatch 是异步的，无法立即得到更换后的状态
    message.success(`已切换至${language === "zh" ? "English" : "简体中文"}`);
  };

  return <i className={`iconfont icon-translate`} onClick={changeLanguage} />;
};

export default Language;
