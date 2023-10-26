import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

function CartNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
}
export default CartNavigator;
