// OrdersStyles.js
import { StyleSheet } from 'react-native';

const OrdersStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  orderContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  orderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderInfo: {
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  noOrderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noOrderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  orderInfo: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  orderDetail: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  userInfo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  itemsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  item: {
    fontSize: 14,
    marginBottom: 5,
  },
  orderText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default OrdersStyles;
