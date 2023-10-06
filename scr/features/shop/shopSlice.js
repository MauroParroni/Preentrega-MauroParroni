import { createSlice } from "@reduxjs/toolkit";
import dataCategories from '../../data/categories'
import dataProducts from '../../data/products'

const initialState = {
    categories: dataCategories,
    products : dataProducts,
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