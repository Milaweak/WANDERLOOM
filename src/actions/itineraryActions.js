import {loginUser} from "./userActions";
import {setItineraries} from "../features/userSlice";

export const fetchUserItineraries = () => async (dispatch, getState) => {
    try {
        const { email, password } = getState().user;
        const token = getState().user.token;

        if (!token) {
            await dispatch(loginUser(email, password));
            const newToken = getState().user.token;

            if (!newToken) {
                window.location.href = '/login';
                return;
            }
        }

        const itinerariesResponse = await fetch('http://localhost:8000/api/itinary/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const itinerariesData = await itinerariesResponse.json();
        dispatch(setItineraries(itinerariesData));
    } catch (error) {
        console.error('Erreur lors de la récupération des itinéraires de l\'utilisateur:', error);
    }
};



export const fetchItineraryById = (id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/api/itinary/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch itinerary');
        }
        const itinerary = await response.json();
        dispatch(fetchItinerarySuccess(itinerary));
    } catch (error) {
        console.error('Error fetching itinerary:', error);
    }
};

const fetchItinerarySuccess = (itinerary) => {
    return {
        type: 'FETCH_ITINERARY_SUCCESS',
        payload: itinerary,
    };
};

export const updateItinerary = (id, newData) => async (dispatch) => {
    try {
        console.log(newData);
        const response = await fetch(`http://localhost:8000/api/itinary/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
            body: JSON.stringify(newData),
        });
        if (!response.ok) {
            throw new Error('Failed to update itinerary');
        }
        const updatedItinerary = await response.json();
        console.log(newData);
        dispatch(updateItinerarySuccess(updatedItinerary));
    } catch (error) {
        console.error('Error updating itinerary:', error);
    }
};

const updateItinerarySuccess = (itinerary) => {
    return {
        type: 'UPDATE_ITINERARY_SUCCESS',
        payload: itinerary,
    };
};

export const generateItinerary = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8000/api/itineraries/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to generate itinerary');
        }
        const newItinerary = await response.json();
        dispatch(generateItinerarySuccess(newItinerary));
    } catch (error) {
        console.error('Error generating itinerary:', error);
    }
};

const generateItinerarySuccess = (itinerary) => {
    return {
        type: 'GENERATE_ITINERARY_SUCCESS',
        payload: itinerary,
    };
};

export const deleteItinerary = (id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/api/itineraries/${id}/delete`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete itinerary');
        }
        dispatch(deleteItinerarySuccess(id));
    } catch (error) {
        console.error('Error deleting itinerary:', error);
    }
};

const deleteItinerarySuccess = (id) => {
    return {
        type: 'DELETE_ITINERARY_SUCCESS',
        payload: id,
    };
};
