import type { Components } from "react-markdown";

const PreCom: Components["pre"] = ({ children }) => {
  return <pre className="not-prose">{children}</pre>;
};

export default PreCom;
