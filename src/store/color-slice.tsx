import { createSlice } from "@reduxjs/toolkit";

interface ColorSliceState {
  value: string;
}

const initialState: ColorSliceState =  { value: "black" };

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeRedColor(state) {
      state.value = 'red'
    },
    changePurpleColor(state) {
      state.value = 'purple'
    },
    changeOrangeColor(state) {
      state.value = 'orange'
    }
  },
});


export const colorActions = colorSlice.actions;
export default colorSlice.reducer;

