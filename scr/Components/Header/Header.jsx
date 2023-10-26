import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Header/headerStyles";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/auth/authSlice";
import { deleteSessions } from "../../db";
import { Alert } from "react-native";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const logout = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro de que deseas cerrar sesión?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sí",
        onPress: () => {
          dispatch(clearUser());
          deleteSessions();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {title !== "Categorias" ? (
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.backButton}>{"< Atras"}</Text>
        </TouchableOpacity>
      ) : null}
      {title === "Categorias" ? (
        <Text style={styles.textCategory}>{title}</Text>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
      <Feather
        name="log-out"
        size={24}
        style={styles.logout}
        onPress={logout}
        color={"white"}
      />
    </View>
  );
};

export default Header;
