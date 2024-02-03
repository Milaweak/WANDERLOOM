// import axios from "axios";

// const DataFetcher = async (setDataResponse, formData) => {
//   axios
//     .post(
//       "http://localhost:8000/api/itinary/publication",
//       {
//         formData,
//       },
//       {
//         headers: {
//           "Content-Type": "application/ld+json",
//           Accept: "application/ld+json",
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response);
//       setDataResponse(response.data);
//     })
//     .catch((error) => {
//       console.error("Erreur lors de la requête :", error);
//     });
// };
// export default DataFetcher;
import axios from "axios";

const DataFetcher = async (formData = {}, setDataResponse) => {
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

export default DataFetcher;
