import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
        container:{
            alignItems: "center",
            flex: 1,
            width: '100%',
            backgroundColor: colors.quaternary,
            paddingBottom: 50,
        },
        descriptionContainer:{
          alignItems: "center",
            width: '100%',
            margin: 30,
        },
        title:{
            fontSize: 30,
            fontFamily: 'Inter',
            textAlign: 'center',
        },
        price:{
            fontSize: 25,
            padding: 10,
        },
        wrapper: { },
        slide: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        },
        image: {
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        },
        buyButton: {
            marginTop: 20,
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 5,
          },
          buyButtonText: {
            color: 'white',
            fontSize: 16,
            
          },
          desc:{
            fontSize: 18,
            fontFamily: 'Inter',
            textAlign: 'center',
          },
          text:{
            textDecorationLine: 'underline',
            fontSize: 24,
            fontFamily: 'Inter',
            textAlign: 'center',
            padding: 10,
          }

})