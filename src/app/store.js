
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import activityReducer from "../reducers/activityReducer";
import itineraryReducer from "../reducers/itineraryReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        activity: activityReducer,
        itinerary: itineraryReducer,
    },
});
