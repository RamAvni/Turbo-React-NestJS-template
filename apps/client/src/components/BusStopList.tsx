import { useGetBusStopListByRadius } from "MOT-api";
import type { FC } from "react";
import { BusLineListItem } from "./BusLineListItem";

export const BusStopList: FC = () => {
  const { data } = useGetBusStopListByRadius(
    1,
    31.788252088613575,
    35.202625941956484,
    50,
    "he",
  );

  return (
    <ol>
      {data?.map((busStop) => {
        return (
          <div style={{ border: "1px solid black", marginBottom: "2px" }}>
            <h1>Bus Stop: {busStop.Name}</h1>
            {busStop.LineList.map((busLine) => (
              <BusLineListItem busLine={busLine} />
            ))}
          </div>
        );
      })}
    </ol>
  );
};
