import { Pressable, TextInput, Text, View, Image } from "react-native";
import React from "react";
import styles from "./loginStyles";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import { insertSessions } from "../../db";

// ... importaciones

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
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image style={styles.logoImage} source={Logo} />
        <Text>Inicia Sesion</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder="  Correo electrónico"
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          placeholder="  Contraseña"
          secureTextEntry={true}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text>Login</Text>
        </Pressable>
        <Text>No tienes una Cuenta?</Text>
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
