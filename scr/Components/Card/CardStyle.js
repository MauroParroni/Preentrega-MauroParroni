import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor: colors.secondary,
        shadowColor:'#000',
        shadowOffset: {height: 5, width:3},
        elevation:100,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})
