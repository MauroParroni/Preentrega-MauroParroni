import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
        container:{
            alignItems: "center",
            flex: 1,
            width: '100%',
            backgroundColor: colors.quaternary,
        },
        image:{
            marginTop: 10,
            marginHorizontal: 25,
            height :'50%',
            width: '90%',
        },
        title:{
            fontSize: 30,
            fontFamily: 'Kalam',
        },
        price:{
            fontSize: 25,
        }

})