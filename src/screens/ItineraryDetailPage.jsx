import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchItineraryById, updateItinerary, generateItinerary, deleteItinerary } from '../actions/itineraryActions';
import GradientButton from "../components/alt/GradiantBouton";
import DeleteButton from "../components/alt/DeleteButton";
import TextField from "@mui/material/TextField";

const ItineraryDetailPage = () => {
    const [formData, setFormData] = useState({ country: '', title: '' });
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const itinerary = useSelector(state => state.itinerary.itinerary);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchItineraryById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (itinerary && itinerary.title) {
            console.log(itinerary);
            setFormData({ country: itinerary.country, title: itinerary.title });
        }
    }, [itinerary]);

    const handleUpdateItinerary = () => {
        dispatch(updateItinerary(id, formData));
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleGenerateItinerary = () => {
        dispatch(generateItinerary());
        navigate('/home');
    };

    const handleDeleteItinerary = () => {
        dispatch(deleteItinerary(id));
        navigate('/home');
    };


    return (
        <div className="container mx-auto p-4">
            {itinerary ? (
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4">{itinerary.country}</h2>
                    <p className="text-gray-700 mb-6">{itinerary.title}</p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <GradientButton
                            label="Modifier"
                            event={() => setIsEditing(true)}
                        />
                        <GradientButton
                            label="Générer un nouvel itinéraire"
                            event={handleGenerateItinerary}
                        />
                        <DeleteButton label="Supprimer l'itinéraire" onClick={handleDeleteItinerary} />
                    </div>


                    {isEditing && (
                        <>
                            <TextField
                                margin="dense"
                                label="Localisation"
                                type="text"
                                fullWidth
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Titre"
                                type="text"
                                fullWidth
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                            <GradientButton
                                label="Enregistrer"
                                event={handleUpdateItinerary}
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

export default ItineraryDetailPage;