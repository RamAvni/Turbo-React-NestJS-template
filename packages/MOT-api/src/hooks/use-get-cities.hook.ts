import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MOT_API } from "../constants";
import { CityI } from "../types";

export function useGetCities(language: "he" | "en") {
  const { getCityList } = MOT_API.searchService;
  return useQuery({
    queryKey: ["getCities", language],
    queryFn: async () => {
      return (await axios.get<CityI[]>(getCityList(language))).data;
    },
  });
}
