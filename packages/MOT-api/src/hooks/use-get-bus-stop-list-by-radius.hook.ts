import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MOT_API } from "../constants";
import { BusStopI } from "../types";

export function useGetBusStopListByRadius(
  dateOrder: number,
  lat: number,
  lon: number,
  scanRadius: number,
  language: "he" | "en",
) {
  const { getBusstopListByRadius } = MOT_API.searchService;
  return useQuery({
    queryKey: ["getBusStopListByRadius", language],
    queryFn: async () => {
      return (
        await axios.get<BusStopI[]>(
          getBusstopListByRadius(dateOrder, lat, lon, scanRadius, language),
        )
      ).data;
    },
  });
}
