import { configureStore } from "@reduxjs/toolkit";
import togglerReducer from '../features/toggler'

export const store = configureStore({
    reducer: {
        toggler: togglerReducer,
    }
});

declare global {
    type RootState = ReturnType<typeof store.getState>
}
