import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: "userLogged",
    updateAt: Date.now().toLocaleString(),
    items: [],
    total: 0, 
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem:(state, action) => {
            const productRepeated = state.items.find(items => items.id === action.payload.id);
            if (productRepeated){
                const itemsUpdated = state.items.map(item =>{
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity; 
                        return item;
                    }
                })
                const total = itemsUpdated.reduce(
                    (acc, item) => (acc += item.price* item.quantity)
                )
                state ={
                    ...state,
                    items: itemsUpdated,
                    total,
                    updateAt: new Date().toLocaleString()
                }
            }else {
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, item) => (acc+= item.price * item.quantity),0
                )
                state ={
                    ...state,
                    total,
                    updateAt: new Date().toLocaleString()
                }
            }
        },
        removeItem:(state, action) => {

        }
    },
})


export const {addItem,removeItem} =cartSlice.actions

export default cartSlice.reducer
