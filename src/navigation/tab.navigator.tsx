import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ExploreEcreen,
  CartScreen,
  OfferScreen,
  AccountScreen,
} from "../screens";

import {
  SearchIcon,
  CartIcon,
  HomeIcon,
  OfferIcon,
  AccountIcon,
} from "../components/atoms/icons";

import { NavTabIcon } from "../components/molecules";

import { theme } from "../theme";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused }) => {
        //   let Icon;

        //   if (route.name === "Home") {
        //     Icon = focused ? (
        //       <HomeIcon stroke={theme.colors.ui.primary} />
        //     ) : (
        //       <HomeIcon stroke={theme.colors.ui.disabled} />
        //     );
        //   } else if (route.name === "Explore") {
        //     Icon = focused ? (
        //       <SearchIcon stroke={theme.colors.ui.primary} />
        //     ) : (
        //       <SearchIcon stroke={theme.colors.ui.disabled} />
        //     );
        //   } else if (route.name === "Cart") {
        //     Icon = focused ? (
        //       <CartIcon stroke={theme.colors.ui.primary} />
        //     ) : (
        //       <CartIcon stroke={theme.colors.ui.disabled} />
        //     );
        //   } else if (route.name === "Offer") {
        //     Icon = focused ? (
        //       <OfferIcon stroke={theme.colors.ui.primary} />
        //     ) : (
        //       <OfferIcon stroke={theme.colors.ui.disabled} />
        //     );
        //   } else if (route.name === "Account") {
        //     Icon = focused ? (
        //       <AccountIcon stroke={theme.colors.ui.primary} />
        //     ) : (
        //       <AccountIcon stroke={theme.colors.ui.disabled} />
        //     );
        //   }

        //   return Icon;
        // },
        tabBarStyle: { justifyContent: "center", alignItems: "center" },
        tabBarActiveTintColor: "#40BFFF",
        tabBarInactiveTintColor: "#9098B1",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: () => <NavTabIcon navigateTo="Home" />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreEcreen}
        options={{
          tabBarButton: () => <NavTabIcon navigateTo="Explore" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: () => <NavTabIcon navigateTo="Cart" />,
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarButton: () => <NavTabIcon navigateTo="Offer" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarButton: () => <NavTabIcon navigateTo="Account" />,
        }}
      />
    </Tab.Navigator>
  );
};
