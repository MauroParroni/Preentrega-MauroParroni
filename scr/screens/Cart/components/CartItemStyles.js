import { StyleSheet } from "react-native";
import { colors } from '../../../Constants/Colors'

export default styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomColor: colors.terciary,
  },
  imageContainer: {
    flex: 0.6,
    marginRight: 8,
  },
  divider: {
    height: '100%',
    width: 1, 
    backgroundColor: colors.terciary, 
  },
  detailsContainer: {
    flex: 2,
    marginLeft: 8, 
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
