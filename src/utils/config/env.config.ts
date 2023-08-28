const weatherApiUrl = process.env.REACT_APP_WEATHER_API_URL ?? "";
const geocodingApiUrl = process.env.REACT_APP_GEOCODING_API_URL ?? "";

const env = {
  weatherApiUrl,
  geocodingApiUrl,
};

export default env;
