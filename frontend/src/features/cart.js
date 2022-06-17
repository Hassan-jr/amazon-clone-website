import { createSlice } from "@reduxjs/toolkit";



export const cart = createSlice({
    name: "DetailedCard",
    initialState: {
        value: [],
      },
    reducers: {
        addCart:  (state, action)=>{
            const check = state.value.every ( item => item._id !== action.payload._id)
            if (check) {
                state.value.push(action.payload)
            }
        },
        removeCart: (state, action)=>{
         state.value =   state.value.map(item=> item._id !== action.payload._id)
        }
    }
})

export const {addCart,removeCart} = cart.actions;
export default cart.reducer;