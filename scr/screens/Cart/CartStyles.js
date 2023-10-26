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
            alignSelf: 'center', 
          },
          
          totalText: {
            fontSize: 20, 
            fontWeight: 'bold', 
            color: 'black', 
            marginTop: 10, 
            marginBottom: 20, 
            textAlign: 'center', 
          },
          emptyText: {
            textAlign: 'center',
            paddingTop: 450,
            fontSize: 20, 
            fontWeight: 'bold', 
            color: 'black',
          }

})