import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        paddingTop: 32,
        color: 'white',
        fontFamily: 'Lobster',
    }
})