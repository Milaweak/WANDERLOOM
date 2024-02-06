import axios from "axios";

export const DataFetcher = async (formData = {}, setDataResponse) => {
  let yolo = JSON.stringify(formData);
  await axios
    .post("http://localhost:8000/api/itinary/publication", formData, {
      headers: {
        "Content-Type": "application/ld+json",
        Accept: "application/ld+json",
      },
    })
    .then((response) => {
      console.log(response);
      setDataResponse(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
};
export const login = async (credentials, setUserData) => {
  try {
    const response = await axios.post("http://localhost:8000/auth", credentials, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/ld+json",
      },
    });
    console.log(response);
    setUserData(response.data);
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  }
};
export const register = async (userData, setResponseData) => {
  try {
    const response = await axios.post("http://localhost:8000/api/register", userData, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
    console.log("Réponse de l'inscription:", response);
    setResponseData(response.data);
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error.response ? error.response.data : error.message);
  }
};

export default DataFetcher;
