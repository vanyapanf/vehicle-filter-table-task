import React, { useState, useEffect } from "react";
import { VehicleApi } from "../data/vehicles/api";
import { Vehicle, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

interface FilterProps {
  onChange: (a: Vehicle[]) => void;
}

export const Filter: React.FC<FilterProps> = ({ onChange }) => {
  const [vehicleName, setVehicleName] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);

  useEffect(() => {
    const data = VehicleApi.search({
      title: vehicleName,
      type: vehicleType
    });
    onChange(data);
  }, [vehicleName, vehicleType]);

  return (
    <div>
      <input
        type="text"
        value={vehicleName}
        onInput={(e) => setVehicleName(e.target.value)}
      />
      <VehicleTypeSelect value={vehicleType} onChange={setVehicleType} />
    </div>
  );
};
