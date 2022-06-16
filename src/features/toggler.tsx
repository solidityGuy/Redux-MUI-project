import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false
}

export const togglerSlice = createSlice({
    name: 'showSidebar',
    initialState,
    reducers: {
        show: (state) => {
            state.showSidebar = !state.showSidebar;
        },
    }
});

export const { show } = togglerSlice.actions;

export default togglerSlice.reducer;