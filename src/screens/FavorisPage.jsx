import React, { useEffect, useState } from "react";

import { Typography, IconButton, Grid, Paper, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataFetcher from "../api/DataFetcher";
const Favorites = ({ onEdit, onDelete }) => {
  const [dataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    DataFetcher(setDataResponse);
  }, []);

  const handleEdit = (routeId) => {
    onEdit(routeId);
  };

  const handleDelete = (routeId) => {
    onDelete(routeId);
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        width: "90%",
        margin: "auto",
        marginTop: "2rem",
        backgroundColor: "#F2F0F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "25px",
        overflow: "auto",
        maxHeight: "80vh",
      }}
    >
      <Typography variant="h5" component="div">
        Itinéraires Favoris
      </Typography>
      <Grid container spacing={3}>
        {dataResponse !== null && Object.entries(dataResponse).length > 0
          ? Object.values(dataResponse).map(
              (route, key) => (
                console.log(dataResponse),
                (
                  <Grid item xs={12} key={key}>
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
                          {}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {route.description}
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
