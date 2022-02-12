import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ExploreEcreen,
  CartScreen,
  OfferScreen,
  AccountScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreEcreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Offer" component={OfferScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
