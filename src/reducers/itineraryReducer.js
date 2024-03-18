const initialState = {
    itinerary: null,
};

const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITINERARY_SUCCESS':
            return {
                ...state,
                itinerary: action.payload,
            };
        case 'UPDATE_ITINERARY':
            return {
                ...state,
                itinerary: action.payload,
            };
        case 'UPDATE_ITINERARY_SUCCESS':
            return {
                state,
            };
        case 'GENERATE_ITINERARY':
            return {
                ...state,
                itinerary: action.payload,
            };
        case 'DELETE_ITINERARY':
            return {
                ...state,
                itinerary: null,
            };
        default:
            return state;
    }
};

export default itineraryReducer;
