import type { BusLineI } from "MOT-api";
import type { FC } from "react";

export const BusLineListItem: FC<{ busLine: BusLineI }> = ({ busLine }) => {
  const { Description: description, Shilut: busNumber } = busLine;
  return (
    <li>
      <h1>{description}</h1>
      <h2>{busNumber}</h2>
    </li>
  );
};
