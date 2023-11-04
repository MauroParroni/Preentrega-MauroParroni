import { Text, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import styles from "./profileStyles";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice";
import { usePostProfileImageMutation } from "../../services/shopApi";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveImage, result] = usePostProfileImageMutation();
  const image = useSelector((state) => state.auth.imageCamera);
  const veryfyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };
  const pickImage = async () => {
    const isCameraOk = await veryfyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64, ${result.assets[0].base64}`)
        );
      }
    }
  };
  const confirmImage = () => {
    Alert.alert(
      "Confirmar",
      "¿Estás seguro de que deseas guardar esta imagen como tu foto de perfil?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            triggerSaveImage({
              image,
              localId,
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text>Bienvenido {user}</Text>
          <Pressable style={styles.cameraButton} onPress={confirmImage}>
            <Text>Confirmar</Text>
          </Pressable>
          <Pressable
            style={styles.cameraButton}
            onPress={() => navigation.navigate("Localizacion")}
          >
            <Text>Ir a mi ubicacion</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/6a/4e/d3/6a4ed346ebbf3f9b81bbeaba0dae6fc2.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de Perfil</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
