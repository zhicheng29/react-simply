import { Terminal } from "lucide-react";

import CopyButton from "./CopyButton";

import "highlight.js/styles/atom-one-dark.css";
import type { Components } from "react-markdown";

const CodeCom: Components["code"] = ({ node, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  if (match?.length) {
    const id = Math.random().toString(36).substr(2, 9);
    return (
      <article className="code-container">
        <header className="code-header">
          <div className="code-meta">
            <Terminal size={16} />
            <span className="code-file-name">{(node?.data as any)?.meta || ""}</span>
          </div>
          <CopyButton id={id} />
        </header>
        <div id={id} className="code-content">
          {children}
        </div>
      </article>
    );
  } else {
    return (
      <code {...props} className="not-prose">
        {children}
      </code>
    );
  }
};

export default CodeCom;
