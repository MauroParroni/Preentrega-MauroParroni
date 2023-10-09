import { StyleSheet } from "react-native"
import { colors } from "../../Constants/Colors"


export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.quaternary,
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        width: 250,
        borderRadius: 10,
        height: 250,
        marginBottom: 20,
    },
    cameraButton:{
        backgroundColor: colors.primary,
        width: '30%',
        height: 30,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})