import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchActivityById, updateActivity, generateActivity, deleteActivity } from '../actions/activityActions';
import GradientButton from "../components/alt/GradiantBouton";
import DeleteButton from "../components/alt/DeleteButton";
import TextField from "@mui/material/TextField";

const ActivityDetailPage = () => {
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const activity = useSelector(state => state.activity.activity);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchActivityById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (activity && activity.title && activity.description) {
            setFormData({ title: activity.title, description: activity.description });
        }
    }, [activity]);

    const handleUpdateActivity = () => {
        dispatch(updateActivity(id, formData));
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleGenerateActivity = () => {
        dispatch(generateActivity());
        navigate('/home');
    };

    const handleDeleteActivity = () => {
        dispatch(deleteActivity(id));
        navigate('/home');
    };


    return (
        <div className="container mx-auto p-4">
            {activity ? (
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4">{activity.title}</h2>
                    <p className="text-gray-700 mb-6">{activity.description}</p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <GradientButton
                            label="Modifier"
                            event={() => setIsEditing(true)}
                        />
                        <GradientButton
                            label="Générer une nouvelle activité"
                            event={handleGenerateActivity}
                        />
                        <DeleteButton label="Supprimer l'activité" onClick={handleDeleteActivity} />
                    </div>


                    {isEditing && (
                        <>
                            <TextField
                                margin="dense"
                                label="Titre"
                                type="text"
                                fullWidth
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Description"
                                type="text"
                                fullWidth
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                            <GradientButton
                                label="Enregistrer"
                                event={handleUpdateActivity}
                            />
                        </>
                    )}
                </div>
            ) : (
                <p>Chargement en cours...</p>
            )}
        </div>
    );
};

export default ActivityDetailPage;
