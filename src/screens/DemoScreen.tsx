import { ScrollView } from "react-native";
import { componentData } from "@/src/componentData";

export function DemoScreen({ route, navigation }) {
  const { controlType, library } = route.params;
  // 从数据结构中获取实际的组件
  const ComponentToRender = componentData[controlType][library];
  return (
    <ScrollView>
      {/*<ComponentToRender />*/}
    </ScrollView>
  );
}
