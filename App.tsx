import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/screens";
import { ClientContext } from "graphql-hooks";
import { graphQLClient } from "./src/graphql";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ClientContext.Provider value={graphQLClient}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </ClientContext.Provider>
  );
}
