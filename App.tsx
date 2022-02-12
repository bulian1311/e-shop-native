import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { ClientContext } from "graphql-hooks";
import { graphQLClient } from "./src/graphql";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StackNavigator } from "./src/navigation";

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
    <NavigationContainer>
      <ClientContext.Provider value={graphQLClient}>
        <ThemeProvider theme={theme}>
          <ExpoStatusBar style="auto" />

          <StackNavigator />
        </ThemeProvider>
      </ClientContext.Provider>
    </NavigationContainer>
  );
}
