import { Dialog, Portal, Provider as PaperProvider } from "react-native-paper";
import { Overlay } from "react-native-elements";
import { Modal as KittenModal } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";

// 创建数据结构，值为具体的组件
export const componentData = {
  Dialog: {
    "React Native Paper": () => (
      <PaperProvider>
        <Portal>
          <Dialog visible={true} onDismiss={() => {
          }}>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Content>
              <Text>This is a React Native Paper dialog</Text>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </PaperProvider>
    ),
    "React Native Elements": () => (
      <Overlay isVisible={true}>
        <Text>This is a React Native Elements overlay</Text>
      </Overlay>
    ),
    "UI Kitten": () => (
      <KittenModal visible={true}>
        <Text>This is a UI Kitten modal</Text>
      </KittenModal>
    )
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
