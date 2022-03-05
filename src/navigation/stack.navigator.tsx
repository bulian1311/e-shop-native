import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./tab.navigator";
import {
  LoginScreen,
  RegistrationScreen,
  FavoritesScreen,
  ProductDetailsScreen,
  NotificationsScreen,
  CategoriesScreen,
  ProfileScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
