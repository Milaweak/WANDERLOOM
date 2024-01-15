import React, { useState } from "react";

function ItineraryForm() {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would call the back-end API which in turn calls the OpenAI API
    // and then return the itinerary to display in your application
    console.log(`City: ${city}, Dates: ${JSON.stringify(dates)}`);
    // Fetch itinerary from your API...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          value={dates.startDate}
          onChange={(e) => setDates({ ...dates, startDate: e.target.value })}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={dates.endDate}
          onChange={(e) => setDates({ ...dates, endDate: e.target.value })}
        />
      </label>
      <button type="submit">Create Itinerary</button>
    </form>
  );
}

export default ItineraryForm;
