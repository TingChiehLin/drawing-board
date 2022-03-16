import { createSlice } from "@reduxjs/toolkit";

interface ResetInitialState {
    value: number
}

const initialState: ResetInitialState = {
    value: 0
}

const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
        restTimeHandler(state) {
            state.value = +new Date()
        }
    },
});

export const resetActions = resetSlice.actions;
export default resetSlice.reducer;
