import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./tab.navigator";
import {
  FavoritesScreen,
  ProductDetailsScreen,
  NotificationsScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
