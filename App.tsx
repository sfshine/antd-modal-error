import * as React from "react";
import "./global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { PaperProvider } from "react-native-paper";
import Page from "./Page";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function Main() {
  return (
    <GluestackUIProvider mode="light">
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider>
          <Page />
        </PaperProvider>
      </ApplicationProvider>
    </GluestackUIProvider>
  );
}
