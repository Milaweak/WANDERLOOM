import axios from "axios";

const DataFetcher = (setDataResponse) => {
  axios.get("http://141.95.175.158:3010/villes").then((response) => {
    console.log(response.data);
    setDataResponse(response.data);
    console.log("dataResponse", response.data);
  });
};

export default DataFetcher;
