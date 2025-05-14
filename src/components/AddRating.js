import React, { useState, useEffect } from "react";
import { getVehicles, addRating } from "../services/ApiService";

function AddRating() {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicleId, setSelectedVehicleId] = useState("");
    const [score, setScore] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const response = await getVehicles();
        setVehicles(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addRating(selectedVehicleId, { score, comment });
        alert("Rating added!");
        setSelectedVehicleId("");
        setScore("");
        setComment("");
    };

    return (
        <div>
            <h2>Add Rating</h2>
            <form onSubmit={handleSubmit}>
                <select value={selectedVehicleId} onChange={(e) => setSelectedVehicleId(e.target.value)} required>
                    <option value="">Select Vehicle</option>
                    {vehicles.map(vehicle => (
                        <option key={vehicle.id} value={vehicle.id}>
                            {vehicle.brand} {vehicle.model} ({vehicle.year})
                        </option>
                    ))}
                </select>
                <input type="number" min="1" max="5" placeholder="Score (1-5)" value={score} onChange={(e) => setScore(e.target.value)} required />
                <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
                <button type="submit">Add Rating</button>
            </form>
        </div>
    );
}

export default AddRating;
// Backend: mvn spring-boot:run

// Frontend: npm start