import React from "react";
import { ScrollView } from "react-native";
import { componentData } from "@/src/componentData";
import { Button } from "@ui-kitten/components";

export function ComponentTypeScreen({ navigation }) {
  const controlTypes = Object.keys(componentData);

  return (
    <ScrollView>
      {controlTypes.map((controlType, index) => (
        <Button
          style={{ marginTop: 10 }}
          key={index}
          onPress={() => {
            navigation.navigate("LibraryListScreen", { controlType, key: Math.random().toString() });
          }}
        >{controlType}</Button>
      ))}
    </ScrollView>
  );
}
