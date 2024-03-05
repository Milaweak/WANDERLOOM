import React, { useState } from "react";
import { createitinary } from "../api/DataFetcher"; // Assurez-vous d'importer correctement createitinary

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function ItineraryForm() {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const [dataResponse, setDataResponse] = useState(null);

  const renderDataDetails = (data) => {
    return (
      <List>
        {Object.entries(data).map(([date, activities]) => (
          <React.Fragment key={date}>
            <ListItem>
              <Typography variant="h6">
                {date} {/* Affiche la date */}
              </Typography>
            </ListItem>
            {Array.isArray(activities) ? (
              activities.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemText primary={activity} /> {/* Affiche chaque activité */}
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Aucune activité enregistrée pour cette date" />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    );
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Il semble que vous ne passiez pas formData à createitinary, donc cette partie peut être omise si createitinary n'utilise pas ces données
    // const formData = {
    // city: city,
    //startDate: dates.startDate,
    // endDate: dates.endDate,
    // };
    console.log(`Fetching itinerary...`);

    // Appel de createitinary avec setDataResponse comme callback pour mettre à jour l'état
    await createitinary(setDataResponse); // Ici, vous devez vous assurer que createitinary est défini pour accepter une telle fonction
    setOpenDialog(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "100px auto",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          paddingBottom: "20px",
        }}
      >
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        </label>
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Start Date:
          <input
            type="date"
            value={dates.startDate}
            onChange={(e) => setDates({ ...dates, startDate: e.target.value })}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        </label>
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          End Date:
          <input
            type="date"
            value={dates.endDate}
            onChange={(e) => setDates({ ...dates, endDate: e.target.value })}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Proposition d'itinéraire</DialogTitle>
        <DialogContent dividers>
          {dataResponse ? renderDataDetails(dataResponse) : <Typography>Données non disponibles</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItineraryForm;
