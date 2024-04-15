import React from "react";

import { Card } from "antd";
import MarkDownCom from "@/components/Markdown";

const DocsCom: React.FC = () => {
  return (
    <React.Fragment>
      <Card>
        <MarkDownCom path={"/md/shall.md"} />
      </Card>
    </React.Fragment>
  );
};

export default DocsCom;
