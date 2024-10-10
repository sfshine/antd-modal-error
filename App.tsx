import React, { useState } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { componentData } from "@/src/componentData";

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
  );
}

export function ComponentTypeScreen({ navigate }) {
  const controlTypes = Object.keys(componentData);

  return (
    <ScrollView>
      {controlTypes.map((controlType, index) => (
        <Button
          title={controlType}
          style={{ marginTop: 10 }}
          key={index}
          onPress={() => {
            navigate(SCREENS.LibraryListScreen, { controlType });
          }}
        />
      ))}
    </ScrollView>
  );
}

export function LibraryListScreen({ route, navigate }) {
  const { controlType } = route?.params || {};
  const libraries = Object.keys(componentData[controlType]);

  return (
    <ScrollView>
      <View>
        {libraries.map((library, index) => (
          <Button
            title={library}
            style={{ marginTop: 10 }}
            key={index}
            onPress={() => {
              navigate(SCREENS.DemoScreen, { controlType, library });
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export function DemoScreen({ route, navigate }) {
  const { controlType, library } = route.params;
  const ComponentToRender = componentData[controlType][library];

  return (
    <ScrollView>
      <Button
        title="Back"
        onPress={() => navigate(SCREENS.LibraryListScreen, { controlType })}
      />
      <View style={{ marginTop: 20 }}>
        <ComponentToRender />
      </View>
    </ScrollView>
  );
}
