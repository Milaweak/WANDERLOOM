import React, { useState } from "react";
import DataFetcher from "../api/DataFetcher";
import { Dialog } from "@mui/material";

function ItineraryForm() {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
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
  };

  return (
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
  );
}

export default ItineraryForm;
