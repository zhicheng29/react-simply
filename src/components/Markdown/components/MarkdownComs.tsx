import PreCom from "./PreCom";
import CodeCom from "./CodeCom";

import type { Components } from "react-markdown";

const markdownComponents: Components = {
  pre: PreCom,
  code: CodeCom
};

export default markdownComponents;
