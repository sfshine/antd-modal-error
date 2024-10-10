import React from "react";
import { Text } from "react-native";
import { ModalWithBackdropShowcase } from "@/src/kitten/Dialog";
import MyComponent from "@/src/paper/Dialog";
import Dialogs from "@/src/rne/Dialog";

// 创建数据结构，值为具体的组件
export const componentData = {
  Dialog: {
    "UI Kitten": ModalWithBackdropShowcase,
    "React Native Paper": MyComponent,
    "React Native Elements": Dialogs
  },
  Tab: {
    "React Native Paper": () => (
      <Text>React Native Paper Tab component (placeholder)</Text>
    ),
    "React Native Elements": () => (
      <Text>React Native Elements Tab component (placeholder)</Text>
    )
  }
// 更多控件类型...
};
