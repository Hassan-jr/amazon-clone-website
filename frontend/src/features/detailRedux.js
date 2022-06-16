import { createSlice } from "@reduxjs/toolkit";



export const detailedCard = createSlice({
    name: "DetailedCard",
    initialState: {
        value: 0,
      },
    reducers: {
        add:  (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {add} = detailedCard.actions;
export default detailedCard.reducer;