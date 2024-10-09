import React from "react";
import { ApplicationProvider, Button, Tooltip } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export const TooltipSimpleUsageShowcase = (): React.ReactElement => {

  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = (): React.ReactElement => (
    <Button onPress={() => setVisible(true)}>
      TOGGLE TOOLTIP
    </Button>
  );

  return (
    <Tooltip
      anchor={renderToggleButton}
      visible={visible}
      onBackdropPress={() => setVisible(false)}
    >
      Welcome to UI Kitten 😻涮火锅
    </Tooltip>
  );
};
export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <TooltipSimpleUsageShowcase />
  </ApplicationProvider>
);
