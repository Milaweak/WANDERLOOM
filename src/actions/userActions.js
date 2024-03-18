import { setToken } from '../features/userSlice';

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            dispatch(setToken(token));
            return { token };
        } else {
            console.error('Échec de la connexion:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        return null;
    }
};

/*export const fetchUserItineraries = () => async (dispatch, getState) => {
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
        dispatch(setItineraries(itinerariesData)); // Dispatchez setItineraries avec les données des itinéraires
    } catch (error) {
        console.error('Erreur lors de la récupération des itinéraires de l\'utilisateur:', error);
    }
};*/



