import React, { useState } from "react";
import { addVehicle } from "../services/ApiService";

function AddVehicle() {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addVehicle({ brand, model, year });
        alert("Vehicle added!");
        setBrand("");
        setModel("");
        setYear("");
    };

    return (
        <div>
            <h2>Add New Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
                <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
}

export default AddVehicle;
