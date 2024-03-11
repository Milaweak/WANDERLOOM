import {FETCH_ACTIVITY_SUCCESS, FETCH_ACTIVITY_FAILURE, UPDATE_ACTIVITY_SUCCESS} from './actionTypes';
export const GENERATE_ACTIVITY = 'GENERATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export const updateActivity = (activityId, newData) => async (dispatch) => {
    try {
        console.log('Sending update activity request...');
        const response = await fetch(`http://localhost:8000/api/activities/${activityId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
            body: JSON.stringify(newData),
        });
        console.log('Received update activity response:', newData);
        if (!response.ok) {
            throw new Error('Failed to update activity');
        }
        const updatedActivity = await response.json();
        dispatch(updateActivitySuccess(updatedActivity, newData));
    } catch (error) {
        console.error('Error updating activity:', error);
    }
};

const updateActivitySuccess = (activity) => {
    return {
        type: UPDATE_ACTIVITY_SUCCESS,
        payload: activity,
    };
};


export const generateActivity = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8000/api/activity/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to generate activity');
        }

        const newActivity = await response.json();
        dispatch({
            type: GENERATE_ACTIVITY,
            payload: newActivity,
        });
    } catch (error) {
        console.error('Error generating activity:', error);
    }
};

export const deleteActivity = (activityId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/api/activity/${activityId}/delete`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete activity');
        }
        dispatch(deleteActivitySuccess(activityId));
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'activité:', error);
    }
};

const deleteActivitySuccess = (activityId) => {
    return {
        type: DELETE_ACTIVITY,
        payload: activityId,
    };
};


export const fetchActivityById = (id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/api/activities/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch activity');
        }
        const activity = await response.json();
        console.log(activity)
        dispatch(fetchActivitySuccess(activity));
    } catch (error) {
        dispatch(fetchActivityFailure(error.message));
    }
};

const fetchActivitySuccess = (activity) => {
    return {
        type: FETCH_ACTIVITY_SUCCESS,
        payload: activity,
    };
};

const fetchActivityFailure = (error) => {
    return {
        type: FETCH_ACTIVITY_FAILURE,
        payload: error,
    };
};
