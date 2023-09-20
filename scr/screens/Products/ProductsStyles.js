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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: colors.secondary,
        shadowOffset: { height: 5, width: 3 },
    },
    productText: {
        flex: 1, 
        padding: 5,
        fontSize: 25,
    },
    productImage: {
        borderRadius: 5,
        width: '10%',
        height: '100%',
    },
})