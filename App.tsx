import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Button, IconRegistry } from "@ui-kitten/components";
import { componentData } from "@/src/componentData";
import { PaperProvider } from "react-native-paper";
import { FeatherIconsPack } from "./feather-icons";

// 用来管理当前显示的屏幕
const SCREENS = {
  ComponentTypeScreen: "ComponentTypeScreen",
  LibraryListScreen: "LibraryListScreen",
  DemoScreen: "DemoScreen"
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.ComponentTypeScreen);
  const [screenParams, setScreenParams] = useState({});

  // 自定义导航函数，接受目标屏幕名称和参数
  const navigate = (screen, params = {}) => {
    setScreenParams(params);
    setCurrentScreen(screen);
  };

  return (
    <PaperProvider>
      <IconRegistry icons={FeatherIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {currentScreen === SCREENS.ComponentTypeScreen && (
          <ComponentTypeScreen navigate={navigate} />
        )}
        {currentScreen === SCREENS.LibraryListScreen && (
          <LibraryListScreen navigate={navigate} route={{ params: screenParams }} />
        )}
        {currentScreen === SCREENS.DemoScreen && (
          <DemoScreen navigate={navigate} route={{ params: screenParams }} />
        )}
      </ApplicationProvider>
    </PaperProvider>
  );
}

export function ComponentTypeScreen({ navigate }) {
  const controlTypes = Object.keys(componentData);

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          Component Types
        </Text>
      </View>
      {controlTypes.map((controlType, index) => (
        <Button
          style={{ marginTop: 10 }}
          key={index}
          onPress={() => {
            navigate(SCREENS.LibraryListScreen, { controlType });
          }}
        >{controlType}</Button>
      ))}
    </ScrollView>
  );
}

export function LibraryListScreen({ route, navigate }) {
  const { controlType } = route?.params || {};
  const libraries = Object.keys(componentData[controlType]);

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <TouchableOpacity onPress={() => navigate(SCREENS.ComponentTypeScreen)}>
          <Text style={{ fontSize: 18, marginRight: 10 }}>{"< Back"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          {controlType} Libraries
        </Text>
      </View>
      <View>
        {libraries.map((library, index) => (
          <Button
            style={{ marginTop: 10 }}
            key={index}
            onPress={() => {
              navigate(SCREENS.DemoScreen, { controlType, library });
            }}
          >{library}</Button>
        ))}
      </View>
    </ScrollView>
  );
}

export function DemoScreen({ route, navigate }) {
  const { controlType, library } = route.params;
  console.log("controlType =", controlType, ",library = ", library);
  const ComponentToRender = componentData[controlType][library];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <TouchableOpacity onPress={() => navigate(SCREENS.LibraryListScreen, { controlType })}>
          <Text style={{ fontSize: 18, marginRight: 10 }}>{"< Back"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          {library} Demo
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <ComponentToRender />
      </View>
    </ScrollView>
  );
}
