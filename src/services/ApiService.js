import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getVehicles = () => axios.get(`${API_BASE_URL}/vehicles`);
export const addVehicle = (vehicle) => axios.post(`${API_BASE_URL}/vehicles`, vehicle);

export const getRatings = () => axios.get(`${API_BASE_URL}/ratings`);
export const addRating = (vehicleId, rating) => axios.post(`${API_BASE_URL}/ratings/${vehicleId}`, rating);
