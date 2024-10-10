import React from "react";
import { Tooltip } from "@rneui/themed";
import { Text, View } from "react-native";


export function RNETooltip() {
  const [open, setOpen] = React.useState(false);
  return (
    <View>
      <Tooltip
        visible={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        popover={<Text style={{ color: "#fff" }}>Tooltip text</Text>}
      >
        Click me
      </Tooltip>
    </View>
  );
}
