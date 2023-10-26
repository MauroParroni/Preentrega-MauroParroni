import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";
 
export default styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#E6E6E6",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer:{
        backgroundColor: "#E6E6E6",
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    inputEmail:{
        width: "95%",
        height: 35,
        backgroundColor: colors.primary,
        marginVertical: 15,
        borderRadius: 12,
    },
    loginButton:{
        backgroundColor: colors.primary,
        width: '30%',
        height: 30,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    logoImage: {
        width: "70%",
        height: "35%",
    }
   
})