import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import GradientButton from "../components/alt/GradiantBouton";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { fetchUserItineraries } from '../actions/itineraryActions';
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { Link } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const itineraries = useSelector(state => state.user.itineraries);

    useEffect(() => {
        dispatch(fetchUserItineraries());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };



    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
                <h4 className="text-2xl font-semibold mb-4">Où allons-nous ?</h4>
                <form onSubmit={handleSubmit} className="border border-gray-200 p-4 rounded-lg shadow">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Ville</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField', 'DateField']}>
                                <DateField
                                    label="Début"
                                    defaultValue={dayjs('2022-04-17')}
                                    format="MM-DD-YYYY"
                                />
                                <DateField
                                    label="Fin"
                                    defaultValue={dayjs('2022-04-17')}
                                    format="MM-DD-YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <GradientButton type="submit" label="Valider" />
                    </div>
                </form>
            </div>

            <Typography variant="h4" gutterBottom className="text-yellow-400" style={{ marginTop: '2rem' }}>
                Mes itinéraires
            </Typography>
            {itineraries && itineraries.map((itinerary, index) => (
                <div key={index} className="mt-8">
                    <Typography variant="h5" gutterBottom className="text-yellow-400">
                        <Link to={`/itinerary/${itinerary.id}`}>{itinerary.country}</Link>
                    </Typography>
                    <TableContainer component={Paper} className="rounded-lg">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-semibold bg-lime-200">Dates</TableCell>
                                    <TableCell className="font-semibold bg-lime-200 whitespace-nowrap">Moment de la journée</TableCell>
                                    <TableCell className="font-semibold bg-lime-200">Activité</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(itinerary.itinaryActivities) && itinerary.itinaryActivities.slice(0, 3).map((activity, activityIndex) => (
                                    activity && (
                                        <TableRow key={activityIndex}>
                                            <TableCell>{activity.day}</TableCell>
                                            <TableCell>{activity.dayMoment}</TableCell>
                                            <TableCell>
                                                {activity.activity && (
                                                    <Link to={`/activity/${activity.id}`}>{activity.activity.description}</Link>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    )
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ))}



        </Container>
    );
};

export default Home;
