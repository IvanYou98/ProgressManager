import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "errors",
    initialState: {test: "error"},
    reducers: {
        getErrors: (state, action) => {
            return action.payload;
        }
    }
})

export const {getErrors} = slice.actions;

export default slice.reducer;