// import axios from "axios";

// const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

// const configPlace = {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAP_API_KEY,
//     "X-Goog-FieldMask": [
//       "places.id",
//       "places.name",
//       "places.displayName",
//       "places.formattedAddress",
//       "places.photos",
//       "places.googleMapsUri",
//       "places.location",
//       "places.priceLevel",
//       "places.rating",
//     ],
//   },
// };
// const configCity = {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAP_API_KEY,
//     "X-Goog-FieldMask": [
//       "places.name",
//       "places.displayName",
//       "places.photos",
//       "places.googleMapsUri",
//       "places.location",
//     ],
//   },
// };

// export const PHOTO_URL =
//   "https://places.googleapis.com/v1/{replace}/media?maxHeightPx=1000&key=" +
//   import.meta.env.VITE_GOOGLE_MAP_API_KEY;

// export const getPlaceDetails = (data) =>
//   axios.post(BASE_URL, data, configPlace);
// export const getCityDetails = (data) => axios.post(BASE_URL, data, configCity);

import axios from "axios";

// GoMaps API base URL
const BASE_URL = "https://maps.gomaps.pro/maps/api/place";

// Config for querying places (similar to Google Places)
const configPlace = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Config for querying city details
const configCity = {
  headers: {
    "Content-Type": "application/json",
  },
};

// GoMaps API for photos (since GoMaps does not use `photo_reference` directly in the URL, the photo fetching logic is simplified)
export const PHOTO_URL =
  "https://maps.gomaps.pro/maps/api/place/photo?photo_reference={photo_reference}&maxwidth=400&key=" +
  import.meta.env.VITE_GO_MAPS_API_KEY;

// Function to fetch place details using GoMaps API
export const getPlaceDetails = (placeId) =>
  axios.get(`${BASE_URL}/details/json?place_id=${placeId}&key=${import.meta.env.VITE_GO_MAPS_API_KEY}`, configPlace);

// Function to fetch city details (based on input city query)
export const getCityDetails = (query) =>
  axios.get(`${BASE_URL}/queryautocomplete/json?input=${query}&key=${import.meta.env.VITE_GO_MAPS_API_KEY}`, configCity);

// Example: Calling the API to search for a place
export const searchPlace = (input) =>
  axios.get(`${BASE_URL}/textsearch/json?query=${input}&key=${import.meta.env.VITE_GO_MAPS_API_KEY}`, configPlace);

// Example: Calling the API to find a place based on text input
export const findPlaceFromText = (input, inputType) =>
  axios.get(`${BASE_URL}/findplacefromtext/json?input=${input}&inputtype=${inputType}&key=${import.meta.env.VITE_GO_MAPS_API_KEY}`, configPlace);

// Example: Calling the API to search for nearby places based on location and name
export const nearbySearch = (location, name) =>
  axios.get(`${BASE_URL}/nearbysearch/json?location=${location}&name=${name}&key=${import.meta.env.VITE_GO_MAPS_API_KEY}`, configPlace);
