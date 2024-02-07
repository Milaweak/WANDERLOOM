import React, { useState } from "react";
import DataFetcher from "../api/DataFetcher";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function ItineraryForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const renderDataDetails = (data) => {
    return Object.entries(data).map(([day, details]) => (
      <React.Fragment key={day}>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {day.replace("_", " ").toUpperCase()}
        </Typography>
        <List>
          {Object.entries(details).map(([timeOfDay, activities]) => (
            <ListItem key={timeOfDay}>
              <Typography component="div">
                <strong>{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}:</strong> {activities.join(", ")}
              </Typography>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    ));
  };

  const [dataResponse, setDataResponse] = useState(null); // État pour stocker la réponse

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      city: city,
      startDate: dates.startDate,
      endDate: dates.endDate,
    };

    console.log(`Submitting: `, formData);
    await DataFetcher(formData, setDataResponse);
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
          {dataResponse ? (
            renderDataDetails(dataResponse.itineraire_15_jours)
          ) : (
            <Typography>Données non disponibles</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItineraryForm;
