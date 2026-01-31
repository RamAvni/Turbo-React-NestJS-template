import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MOT_API } from "../constants";

interface CityI {
  ID: number;
  NAME: string;
  PRIORITY: number;
}

export function useGetCities(language: "he" | "en") {
  const { getCityList } = MOT_API.searchService;
  return useQuery({
    queryKey: ["getCities", language],
    queryFn: async () => {
      return (await axios.get<CityI[]>(getCityList(language))).data;
    },
  });
}
