import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import StackNavigator from "./stackNavigator";
import { StyleSheet } from "react-native";
import { colors } from "../Constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-bag"
              size={24}
              color={focused ? colors.primary : colors.quaternary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={24}
              color={focused ? colors.primary : colors.quaternary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? colors.primary : colors.quaternary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? colors.primary : colors.quaternary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.terciary,
  },
});
