import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp, Login } from "../screens";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <AuthStack.Screen name="Signup" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}
export default AuthStackNavigator;
