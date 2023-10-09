import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: null,
    products : null,
    productsFilteredByCategory: [],
    categorySelected: null,
    productIdSelected: null,
}

export const shoptSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCategorySelected: (state, actions) =>{
                state.categorySelected = actions.payload
        },
        setProductIdSelected: (state, actions) =>{
            state.productIdSelected = actions.payload

        }
    }
})

export const {setCategorySelected, setProductIdSelected} = shoptSlice.actions
export default shoptSlice.reducer