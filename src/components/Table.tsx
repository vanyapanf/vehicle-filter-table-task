import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import {
  Vehicle,
  vehicleTypes,
  vehicleTypeTitles
} from "../data/vehicles/contracts";

interface TableItemProps {
  vehicle: Vehicle;
  number: number;
}

interface TableProps {
  vehicles: Vehicle[];
}

const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{vehicle.title}</td>
      <td>{vehicleTypeTitles.[vehicleTypes[vehicle.type]]}</td>
      <td>
        <CurrencyLabel value={vehicle.price} fractionDigits={2} />
      </td>
    </tr>
  );
};

export const Table: React.FC<TableProps> = ({ vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Тип средства</th>
          <th>Цена, ₽</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((x, i) => (
          <TableItem key={x.id} number={i + 1} vehicle={x} />
        ))}
      </tbody>
    </table>
  );
};
