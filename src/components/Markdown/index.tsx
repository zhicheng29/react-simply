import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // 提供插入 md 文档模板标签
import remarkGfm from "remark-gfm"; // 支持 markdown 语法
import rehypeHighlight from "rehype-highlight"; // 高亮

import markdownComs from "./components/MarkdownComs";

import "highlight.js/styles/atom-one-dark.css";
import "./index.less";

interface MarkDownProps {
  path: string;
}

const Markdown: React.FC<MarkDownProps> = ({ path }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fileMdShallFile = async () => {
      const response = await fetch(path);
      if (!response.ok) return;
      const fileText = await response.text();
      setMarkdownContent(fileText);
    };
    fileMdShallFile();
  }, []);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[[remarkGfm]]} rehypePlugins={[rehypeHighlight]} components={markdownComs}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
