import { configureStore } from "@reduxjs/toolkit";

import colorReducer from './color-slice';
import resetReducer from './reset-slice';

const store = configureStore({
    reducer: {
        color: colorReducer,
        reset: resetReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
