import React, { useState } from "react";

import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  id: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ id }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopited(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={onCopy} className="copy-button">
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
};

export default CopyButton;
