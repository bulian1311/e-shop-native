import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen, ProductDetailsScreen } from "../screens";
import { TabNavigator } from "./tab.navigator";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
