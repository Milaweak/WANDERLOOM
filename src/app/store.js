
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import activityReducer from "../reducers/activityReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        activity: activityReducer
    },
});
