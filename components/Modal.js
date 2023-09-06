import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const Modal = ({ modalVisible, onHandleDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text>ATENCION!!!!</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>Estas Seguro de eliminarlo?</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title="Confirmar" onPress={onHandleDelete} />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    alignItems: "center",
    width: "70%",
    borderRadius: 15,
    marginTop: 380,
    marginLeft: 75,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
  },
  modalButton: {
    marginTop: 15,
  },
});
