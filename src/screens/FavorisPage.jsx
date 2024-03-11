import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import {Link} from "react-router-dom";

const Favorites = () => {
    const itineraries = useSelector((state) => state.user.itineraries);

    const favoriteItineraries = itineraries.filter((itinerary) => itinerary.favorite);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {favoriteItineraries.map((itinerary, index) => (
                <div key={index}>
                    <Typography variant="h4" gutterBottom className="text-yellow-400" style={{ marginTop: '2rem' }}>
                        {itinerary.country}
                    </Typography>
                    <TableContainer component={Paper} className="rounded-lg">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-semibold">Dates</TableCell>
                                    <TableCell className="font-semibold">Moment de la journée</TableCell>
                                    <TableCell className="font-semibold">Activité</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {itinerary.itinaryActivities.slice(0, 3).map((activity, activityIndex) => (
                                    <TableRow key={activityIndex}>
                                        <TableCell>{activity.day}</TableCell>
                                        <TableCell>{activity.dayMoment}</TableCell>
                                        <TableCell>
                                            {activity.activity && (
                                                <Link to={`/activity/${activity.id}`}>{activity.activity.description}</Link>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ))}
        </Container>
    );
};

export default Favorites;



