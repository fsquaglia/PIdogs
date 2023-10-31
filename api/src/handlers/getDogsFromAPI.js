const axios = require("axios");

require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

//!busco todos los dogs de la API
const allDogsAPI = async () => {
  const { data } = await axios.get(ENDPOINT + "?api_key=" + API_KEY);

  const allDogsApi = data.map((obj) => ({
    name: obj.name,
    id: obj.id,
    reference_image_id: obj.reference_image_id,
    height: `${obj.height.metric} cm | ${obj.height.imperial} in`,
    weight: `${obj.weight.metric} kg | ${obj.weight.imperial} lbs`,
    life_span: obj.life_span,
    temperament: obj.temperament,
    origin: "API",
  }));
  return allDogsApi;
};

//!busco un dog por id en la API
const dogAPIbyId = async (idRaza) => {
  const { data } = await axios.get(
    ENDPOINT + "/" + idRaza + "?api_key=" + API_KEY
  );

  if (data) {
    result = {
      name: data.name,
      id: data.id,
      reference_image_id: data.reference_image_id,
      height: `${data.height.metric} cm | ${data.height.imperial} in`,
      weight: `${data.weight.metric} kg | ${data.weight.imperial} lbs`,
      life_span: data.life_span,
      temperament: data.temperament,
      origin: "API",
    };
  }
  return result;
};

module.exports = { allDogsAPI, dogAPIbyId };
