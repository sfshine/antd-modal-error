import React from "react";
import { ScrollView, View } from "react-native";
import { componentData } from "@/src/componentData";
import { Button } from "@ui-kitten/components";

export function LibraryListScreen({ route, navigation }) {
  const { controlType } = route.params;
  const libraries = Object.keys(componentData[controlType]);

  console.log("LibraryListScreen render");
  return (
    <ScrollView>
      <View>
        {libraries.map((library, index) => (
          <Button
            style={{ marginTop: 10 }}
            key={index}
            onPress={() => {
              console.log("DemoScreen");
              // navigation.navigate("DemoScreen", { controlType, library });
            }}
          >{library}</Button>
        ))}
      </View>
    </ScrollView>
  );
}
