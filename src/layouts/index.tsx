import React from "react";
import { useOutlet } from "react-router-dom";

const LayoutIndex: React.FC = () => {
  const outlet = useOutlet();
  return (
    <div>
      layout
      {outlet}
    </div>
  );
};
export default LayoutIndex;
