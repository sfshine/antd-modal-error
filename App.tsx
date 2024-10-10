import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ComponentTypeScreen } from "./src/screens/ComponentTypeScreen";
import { LibraryListScreen } from "./src/screens/LibraryListScreen";
import { DemoScreen } from "./src/screens/DemoScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ComponentTypeScreen">
          <Stack.Screen name="ComponentTypeScreen" component={ComponentTypeScreen} />
          <Stack.Screen name="LibraryListScreen" component={LibraryListScreen} />
          <Stack.Screen name="DemoScreen" component={DemoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
