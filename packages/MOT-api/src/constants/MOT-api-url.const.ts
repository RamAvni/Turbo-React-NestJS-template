/**
 * Ministry of Transportation's public api URL
 * {API_BASE_URL}/{CONTROLLER}/{ENDPOINT}
 * */
export const MOT_API_URL = "https://bus.gov.il/WebApi/api";

/**
 * A list of sections("controllers") in the api
 * {API_BASE_URL}/{CONTROLLER}/{ENDPOINT}
 * */
const MOT_API_CONTROLLERS = {
  passengerInfo: "passengerInfo",
} as const;

/**
 * A list of helper functions that build URL paths based on endpoints in MOT's api
 * Given PATH is composed of CONTROLLER and ENDPOINT
 * {API_BASE_URL}/{CONTROLLER}/{ENDPOINT}
 * */
export const MOT_API_SERVICES = {
  /**
   * get a list of all cities/settlements
   * NOTE: I did not find any other languages other than Hebrew and English, but there must be more!
   * */
  getCityList: (language: "he" | "en") =>
    `${MOT_API_CONTROLLERS.passengerInfo}/getCityList/${language}/false`,

  getBusStopListByRadius: (latitude: string, longitude: string) =>
    `${MOT_API_CONTROLLERS.passengerInfo}/GetBusstopListByRadius/1/${latitude}/${longitude}/300/he/false`,

  getRealTimeBusLineListByBusStopFn: (busStop: string) =>
    `${MOT_API_CONTROLLERS.passengerInfo}/GetRealtimeBusLineListByBustop/${busStop}/he/false`,
} as const;
