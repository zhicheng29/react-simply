import React, { Suspense } from "react";

const LazyComponent = (Comp: React.LazyExoticComponent<React.ComponentType>) => {
  return (
    <Suspense>
      <Comp />
    </Suspense>
  );
};

export default LazyComponent;
