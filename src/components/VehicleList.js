import React, { useEffect, useState } from "react";
import { getVehicles } from "../services/ApiService";

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const response = await getVehicles();
        setVehicles(response.data);
    };

    return (
        <div>
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        {vehicle.brand} {vehicle.model} ({vehicle.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VehicleList;
