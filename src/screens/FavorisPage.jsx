import React, { useEffect, useState } from "react";

import { Typography, IconButton, Grid, Paper, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataFetcher from "../api/DataFetcher";
const Favorites = ({ onEdit, onDelete }) => {
  //je crée un tableaux de faux itinéraires, ensuite il faudra les fetch de la base de données et map dessus tout pareil
  const [dataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    DataFetcher(setDataResponse);
  }, []);

  const handleEdit = (routeId) => {
    //grâce à l'id de route que je recup, je fais ici la fonction pour modifier l'itineraire
    onEdit(routeId);
  };

  const handleDelete = (routeId) => {
    //fonction de gestion de la suppression avec l'ID de la route/itineraire
    onDelete(routeId);
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        width: "90%", // Corrected typo from '9O%' to '90%'
        margin: "auto",
        marginTop: "2rem",
        backgroundColor: "#F2F0F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Changed to start alignment
        alignItems: "center",
        borderRadius: "25px",
        overflow: "auto", // Ensures scrolling if content overflows
        maxHeight: "80vh",
      }}
    >
      <Typography variant="h5" component="div">
        Itinéraires Favoris
      </Typography>
      <Grid container spacing={3}>
        {dataResponse !== null && Object.entries(dataResponse).length > 0
          ? Object.values(dataResponse).map(
              (route, index) => (
                console.log(dataResponse),
                (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "background-color 0.3s",
                        borderRadius: "35px",
                        border: "3px solid #6A6A6A",
                        background: "#FAFAFA",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div>
                        <Typography variant="h6" component="div">
                          {route.Nom}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {route.Matin}
                        </Typography>
                      </div>
                      <div>
                        <IconButton color="primary" aria-label="Editer" onClick={() => handleEdit(route.id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="Supprimer" onClick={() => handleDelete(route.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </Paper>
                  </Grid>
                )
              )
            )
          : ""}
      </Grid>
    </Box>
  );
};

export default Favorites;
