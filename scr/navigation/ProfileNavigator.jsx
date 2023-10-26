import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationScreen, Profile } from "../screens";

const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ProfileStack.Screen name="Perfil" component={Profile} />
      <ProfileStack.Screen name="Localizacion" component={LocationScreen} />
    </ProfileStack.Navigator>
  );
}
export default ProfileNavigator;
