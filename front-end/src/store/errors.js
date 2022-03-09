import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "errors",
    initialState: {},
    reducers: {
        getErrors: (state, action) => {
            return action.payload;
        }
    }
})

export const {getErrors} = slice.actions;

export default slice.reducer;