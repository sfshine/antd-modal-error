import React from "react";
import { Icon, IconElement, Tab, TabBar } from "@ui-kitten/components";
import { Text, View } from "react-native";

const PersonIcon = (props): IconElement => (
  <Icon
    {...props}
    name="user"
  />
);

const BellIcon = (props): IconElement => (
  <Icon
    {...props}
    name="creditcard"
  />
);

const EmailIcon = (props): IconElement => (
  <Icon
    {...props}
    name="mail"
  />
);
export const TabBarThemingShowcase = (): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1 }} />
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        <Tab
          icon={PersonIcon}
          title="USERS"
        >
          <View>
            <Text>10</Text>;
          </View>
        </Tab>
        <Tab
          icon={BellIcon}
          title="ORDERS"
        />
        <Tab
          icon={EmailIcon}
          title="TRANSACTIONS"
        />
      </TabBar>
    </View>
  );
};
