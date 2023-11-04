import { Pressable, TextInput, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./loginStyles";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import Logo from "../../assets/Images/Logo.png";
import { insertSessions } from "../../db";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [triggerLogin, result] = useLoginMutation();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        dispatch(setUser(result));
        insertSessions({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then((result) => console.log(result))
          .catch((err) => console.log(err.message));
      })
      .catch((error) => {
        if (error.data.error.message === "INVALID_LOGIN_CREDENTIALS") {
          Alert.alert("Error", "Usuario o contraseña incorrecto", [{ text: "OK" }]);
        } else {
          console.error("Error desconocido:", error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image style={styles.logoImage} source={Logo} />
        <Text>Inicia Sesión</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text>Login</Text>
        </Pressable>
        <Text>No tienes una cuenta?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
