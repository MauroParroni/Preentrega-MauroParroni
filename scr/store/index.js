import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import shopSlice from '../features/shop/shopSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../services/shopApi';
import cartSlice from '../features/cart/cartSlice';
import { authApi } from '../services/authApi';

const store = configureStore({
  reducer: {
    shop: shopSlice,
    cart: cartSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
