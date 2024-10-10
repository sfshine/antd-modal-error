import React from "react";
import { ProgressBar } from "@ui-kitten/components";

export const ProgressBarSimpleUsageShowcase = (): React.ReactElement => {
  const progress = 0.1;
  return (
    <ProgressBar
      animating={true}
      progress={progress}
    />
  );
};
