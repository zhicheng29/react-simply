import React from "react";

import MarkDownCom from "@/components/Markdown";

import "./index.less";

const DocsCom: React.FC = () => {
  return (
    <React.Fragment>
      <div className="docs-container">
        <div>docs</div>
        <div className="shall-markdown">
          <MarkDownCom path={"/md/shall.md"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DocsCom;
