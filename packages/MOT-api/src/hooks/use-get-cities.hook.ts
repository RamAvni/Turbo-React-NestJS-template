import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MOT_API_SERVICES, MOT_API_URL } from "../constants/MOT-api-url.const";

interface CityI {
  ID: number;
  NAME: string;
  PRIORITY: number;
}

export function useGetCities(language: "he" | "en") {
  const { getCityListFnPath } = MOT_API_SERVICES;
  return useQuery({
    queryKey: ["getCities", language],
    queryFn: async () => {
      return (
        await axios.get<CityI[]>(
          `${MOT_API_URL}/${getCityListFnPath(language)}`,
        )
      ).data;
    },
  });
}
