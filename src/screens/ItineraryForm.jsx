import React, { useState } from "react";
import DataFetcher from "../api/DataFetcher";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function ItineraryForm() {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const [dataResponse, setDataResponse] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleConfirm = async () => {
    setOpenDialog(false);
    const formData = {
      city: city,
      startDate: dates.startDate,
      endDate: dates.endDate,
    };

    console.log(`Submitting: `, formData);
    await DataFetcher(formData, setDataResponse);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOpenDialog(); // Ouvrir le dialogue de confirmation
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
        {/* Vos champs de formulaire ici */}
      </form>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmer l'ajout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir ajouter cet itinéraire ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItineraryForm;
