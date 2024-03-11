import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    itineraries: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setItineraries(state, action) {
            state.itineraries = action.payload;
        },
    },
});

export const { setToken, setItineraries } = userSlice.actions;
export default userSlice.reducer;