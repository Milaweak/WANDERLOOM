
import { UPDATE_ACTIVITY, UPDATE_ACTIVITY_SUCCESS, GENERATE_ACTIVITY, DELETE_ACTIVITY, FETCH_ACTIVITY_FAILURE, FETCH_ACTIVITY_SUCCESS } from '../actions/actionTypes';

const initialState = {
    activities: [],
    activity: null,
    error: null,
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                error: null,
            };
        case FETCH_ACTIVITY_FAILURE:
            return {
                ...state,
                activity: null,
                error: action.payload,
            };
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activity: action.payload.activity,
                error: null,
            };

        case UPDATE_ACTIVITY_SUCCESS:
            return state;


        case GENERATE_ACTIVITY:
            const newActivity = action.payload;
            return {
                ...state,
                activities: [...state.activities, newActivity],
            };
        case DELETE_ACTIVITY:
            const activityIdToDelete = action.payload;
            const filteredActivities = state.activities.filter(activity => activity.id !== activityIdToDelete);
            return {
                ...state,
                activities: filteredActivities,
            };
        default:
            return state;
    }
};

export default activityReducer;
