import React from "react";
import { ScrollView } from "react-native";
import { componentData } from "@/src/componentData";
import { Button } from "@ui-kitten/components";

export function ComponentTypeScreen({ route, navigation }) {
  const controlTypes = Object.keys(componentData);

  return (
    <ScrollView>
      {controlTypes.map((controlType, index) => (
        <Button
          style={{ marginTop: 10 }}
          key={index}
          onPress={() => {
            console.log("LibraryListScreen");
            navigation.navigate("LibraryListScreen", { controlType });
          }}
        >{controlType}</Button>
      ))}
    </ScrollView>
  );
}
