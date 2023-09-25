import { StyleSheet } from "react-native";
import {colors} from '../../../Constants/Colors'

export default styles = StyleSheet.create({
        container:{
            padding: 8,
            borderBottomWidth: 1,
            borderBottomColor: colors.terciary,
        },
        name: {
            fontSize: 18,
        },
        details: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
        }

})