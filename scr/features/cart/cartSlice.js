import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "userLogged",
  updateAt: Date.now().toLocaleString(),
  items: [],
  total: 0,
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find((item) => item.id === action.payload.id);
            if (productRepeated) {
                state.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity,
                        };
                    }
                    return item;
                });
            } else {
                state.items.push(action.payload);
            }
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.updateAt = new Date().toLocaleString();
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.updateAt = new Date().toLocaleString();
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
