import { StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: 80,
    width: '100%',
    alignItems: 'center', 
    paddingLeft: 10, 
  },
  text: {
    flex: 1, 
    fontSize: 35,
    color: 'white',
    fontFamily: 'Lobster',
    textAlign: 'center', 
    marginTop: 32,
    marginRight: 75,
  },
  backButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, 
    marginTop: 34,
    color: 'white',
  },
});
