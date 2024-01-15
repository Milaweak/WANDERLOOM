import axios from "axios";
import React, { useEffect } from "react";

const DataFetcher = (setDataResponse) => {
  axios.get("http://141.95.175.158:3010/itineraire/Paris").then((response ) => {
    console.log(response.data.semaine);
    setDataResponse(response.data);
  });

  // axios
  //   .post("http://127.0.0.1:8000/auth")
  //   .then((response) => {
  //     console.log(response.data);
  //     setDataResponse(response.data);
  //   })
  //  .catch((error) => {
  //    console.log(error);
  //  });
};

export default DataFetcher;
