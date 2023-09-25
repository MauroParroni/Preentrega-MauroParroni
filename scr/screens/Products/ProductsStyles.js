import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";
 
export default styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.quaternary,
    },
    listContainer: {
        paddingHorizontal:10,
        flex: 1,
        marginTop:15 ,
    },
    productList: {
        height: 190,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: colors.secondary,
        shadowOffset: { height: 5, width: 3 },
    },
    productText: {
        flex: 1, 
        paddingTop: 15,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Inter',

    },
    productImage: {
        width: '25%',
        height: '100%',
    },
    productdesc:{
        flex: 1,
        
    }
})