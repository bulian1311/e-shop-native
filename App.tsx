import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { ClientContext } from "graphql-hooks";
import { graphQLClient } from "./src/graphql";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StackNavigator } from "./src/navigation";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

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
