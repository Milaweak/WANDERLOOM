import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css"; // Ensure you create a CSS file with the styles provided below
import DataFetcher from "../api/DataFetcher";
import MapCSS from "../screens/register/register";

function Map() {
  const position = [51.505, -0.09]; // Replace with the desired default latitude and longitude
  const [dataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    DataFetcher(setDataResponse);
  }, []);
  return (
    <div className="split-screen-container">
      <div className="itinerary">
        {/* Place your itinerary content here, similar to the image uploaded */}
        <Card sx={{ minWidth: 290 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Itinéraire
            </Typography>
            <Grid container spacing={0.1}>
              {dataResponse !== null && Object.values(dataResponse?.semaine).length > 0
                ? Object.values(dataResponse.semaine).map((route, index) => (
                    <>
                      <h3 variant="body2" color="text.secondary" key={index}>
                        Jour {index + 1} :
                      </h3>
                      <p>{"Matin : " + route.Matin[0]}</p>
                      <p>{"après-midi : " + route.Aprem[0]}</p>
                    </>
                  ))
                : "yala"}
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div className="map-container">
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
