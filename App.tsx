import * as React from "react";
import { PaperProvider } from "react-native-paper";
import Page from "./Page";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { FeatherIconsPack } from "./feather-icons";

export default function Main() {
  return (
    <>
      <IconRegistry icons={FeatherIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider>
          <Page />
        </PaperProvider>
      </ApplicationProvider>
    </>
  );
}
