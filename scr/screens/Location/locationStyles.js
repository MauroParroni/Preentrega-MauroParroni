import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";
 
export default styles = StyleSheet.create({ 
    container: {
        backgroundColor: colors.quaternary,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    withoutLocation: {
        width: 300,
        height: 300,
        borderWidth: 2,
        borderBlockColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",

    },
    text:{
        padding: 10,
    }
})