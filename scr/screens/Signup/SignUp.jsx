import { Pressable, TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./signUpStyles";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        console.log(result);
        dispatch(setUser(result));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Registrate para comenzar</Text>
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
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
          placeholder="  Confirmar Contraseña"
          secureTextEntry={true}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text>Registrarse</Text>
        </Pressable>
        <Text>¿Ya tienes cuenta?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
