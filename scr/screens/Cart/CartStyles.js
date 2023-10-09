import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
        container:{
            flex: 1,
            width: '100%',
            backgroundColor: colors.quaternary,
        },
        confirmButton: {
            backgroundColor: colors.primary,
            width: '30%',
            height: 30,
            marginVertical: 10,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          },

})