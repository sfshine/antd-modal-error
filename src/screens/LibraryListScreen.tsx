import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { componentData } from "@/src/componentData";
import { Button } from "@ui-kitten/components";

export function LibraryListScreen({ route, navigation }) {
  const { controlType = "Dialog" } = route?.params || {};
  const libraries = Object.keys(componentData[controlType]);

  console.log(route.params);

  useEffect(() => {
    console.log("LibraryListScreen mounted");
  }, []);

  return (
    <ScrollView>
      <View>
        {libraries.map((library, index) => (
          <Button
            style={{ marginTop: 10 }}
            key={index}
            onPress={() => {
              // alert("Button pressed");
              navigation.navigate("DemoScreen", { controlType, library });
            }}
          >{library}</Button>
        ))}
      </View>
    </ScrollView>
  );
}
