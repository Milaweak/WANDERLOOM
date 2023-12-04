import React from "react";
import FavoritePages from "./FavorisPage/FavorisPage.css";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Favorites = ({ onEdit, onDelete }) => {
  //je crée un tableaux de faux itinéraires, ensuite il faudra les fetch de la base de données et map dessus tout pareil
  const dummyFavoriteRoutes = [
    {
      id: 1,
      name: "Itinéraire 1",
      description: "Description de l'itinéraire 1",
    },
    {
      id: 2,
      name: "Itinéraire 2",
      description: "Description de l'itinéraire 2",
    },
    {
      id: 3,
      name: "Itinéraire 3",
      description: "Description de l'itinéraire 3",
    },
  ];

  const handleEdit = (routeId) => {
    //grâce à l'id de route que je recup, je fais ici la fonction pour modifier l'itineraire
    onEdit(routeId);
  };

  const handleDelete = (routeId) => {
    //fonction de gestion de la suppression avec l'ID de la route/itineraire
    onDelete(routeId);
  };

  return (
    <Box sx={{ width: "75%", margin: "0 auto" }}>
      <Typography variant="h5" component="div">
        Itinéraires Favoris
      </Typography>
      <Grid container spacing={3}>
        {dummyFavoriteRoutes.map((route, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background-color 0.3s",
                "&:hover": {
                  borderRadius: "16px",
                  border: "3px solid #6A6A6A",
                  background: "#FAFAFA",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <div>
                <Typography variant="body1" gutterBottom>
                  {route.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {route.description}
                </Typography>
              </div>
              <div>
                <IconButton
                  color="primary"
                  aria-label="Editer"
                  onClick={() => handleEdit(route.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="Supprimer"
                  onClick={() => handleDelete(route.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
