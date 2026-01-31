/**
 * Ministry of Transportation's public api URL
 * */
export const MOT_BASE_URL = "https://bus.gov.il/WebApi/api";

//* NOTE: I did not find any other languages other than Hebrew and English, but there must be more!
export type MotLanguages = "he" | "en";

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
 *
 * These APIs are categorized by "services"
 * */
export const MOT_API = {
  busGovService: {
    getOperatorsList: (parameter: string | number) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/getOperators/${parameter}/false`,

    getOperatorsListSFRest: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetOperatorsSFRest`,

    insertCustomerFeedback: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/InsertCustomerFeedback`,

    insertCustomerComplain: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/InsertCustomerComplain`,

    getFeedbackInfo: (parameter: string | number) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetCustomerFeedback/${parameter}`,
  },
  searchService: {
    getDataFromServer: (methodName: string, ...params: (string | number)[]) => {
      const paramString = params.join("/");
      return `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/${methodName}/${paramString}`;
    },

    getCityList: (lang: MotLanguages, isEgged: boolean = false) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/getCityList/${lang}/${isEgged}`,

    getRovaDetails: (searchPlaceId: number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetRovaDetails/${searchPlaceId}/${language}/false`,

    getCityName: (searchCityId: number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetCityName/${searchCityId}/${language}/false`,

    getBusLineListByYeshuv: (
      fromCityID: number,
      dayOrderID: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetBusLineListByYeshuv/${fromCityID}/${dayOrderID}/${language}/false`,

    getRealtimeBusLineListByBustop: (
      selectedBusstopId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetRealtimeBusLineListByBustop/${selectedBusstopId}/${language}/false`,

    getBusLineListByBustop: (
      dateOrder: string,
      selectedBusstopId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetBusLineListByBustop/${dateOrder}/${selectedBusstopId}/${language}/false`,

    getBusstopListByRadius: (
      dateOrder: number,
      coordinateLat: number,
      coordinateLng: number,
      scanRadius: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetBusstopListByRadius/${dateOrder}/${coordinateLat}/${coordinateLng}/${scanRadius}/${language}/false`,

    getPlacesList: (
      dayOrder: number,
      searchCityId: number,
      searchPlaceId: number,
      lineNumberId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetPlacesList/${dayOrder}/${searchCityId}/${searchPlaceId}/${lineNumberId}/${language}/false`,

    getPlacesByLine: (
      dayOrder: number,
      searchCityId: number,
      searchPlaceId: number,
      lineNumberId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetPlacesList/${dayOrder}/${searchCityId}/${searchPlaceId}/${lineNumberId}/${language}/false`,

    getToYeshuvByLine: (
      dayOrder: number,
      fromQuarterId: number,
      lineNumberId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetToYeshuvByLine/${dayOrder}/${fromQuarterId}/${lineNumberId}/${language}/false`,

    getPathPlan: (
      dayOrder: number,
      fromQuarterId: number,
      toQuarterId: number,
      hour: string,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetDirectSolutions/${dayOrder}/${fromQuarterId}/${toQuarterId}/${hour}/${language}/false`,

    getPathPlanWithOneConnection: (
      dayOrder: number,
      fromQuarterId: number,
      toQuarterId: number,
      hour: string,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetSolution1/${dayOrder}/${fromQuarterId}/${toQuarterId}/${hour}/${language}/false`,

    getPathPlanWithTwoConnections: (
      dayOrder: number,
      fromQuarterId: number,
      toQuarterId: number,
      hour: string,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetSolutions2/${dayOrder}/${fromQuarterId}/${toQuarterId}/${hour}/${language}/false`,

    getDirectLines: (
      dayOrder: number,
      fromCityId: number,
      toCityId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/DirectLines/${dayOrder}/${fromCityId}/${toCityId}/${language}/false`,

    getFreeLanguageResult: (
      freeTextOptionId: number,
      freeTextSessionId: string,
      freeTextQuestion: string,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetFreeLanguageResult/${freeTextOptionId}/${freeTextSessionId}/${freeTextQuestion}/${language}/false`,

    getNewFreeLanguageResult: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetNewFreeLanguageResult`,

    quarterByXy: (
      coordinateLat: number,
      coordinateLng: number,
      coordinateDistance: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/QuarterByXy/${coordinateLat}/${coordinateLng}/${coordinateDistance}/${language}/false`,

    getWeeklyReportTable: (
      fromQuarterId: number,
      toQuarterId: number,
      lineNumberId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetWeeklyReportTable/${fromQuarterId}/${toQuarterId}/${lineNumberId}/${language}/false`,

    getActiveDateList: (searchCityId: number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetActiveDateList/${searchCityId}/${language}/false`,

    getPoligonByQuarterID: (QuarterID: number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetPoligonByQuarterID/${QuarterID}/${language}/false`,

    getEmergencyMessageData: (language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetEmergencyMessageData/${language}/false`,
  },
  /**
   * A Service for obtaining information about the Tel-O-Fun bicycle sharing service in Tel-Aviv.
   * @deprecated
   */
  telofunService: {
    getDetailsByStationId: (stationId: string | number) => {
      // Legacy switch statement logic incorporated inside the function
      const host = window.location.hostname;
      let webserviceUrl = "";

      switch (host) {
        case "localhost":
          webserviceUrl = `http://${host}/Egged.Mot.Service/siteService.svc/`;
          break;
        case "tnuawebtst4":
        case "tnuawebtst4.egged.intra":
          webserviceUrl = `http://${host}/Mot64WebApi/siteService.svc/`;
          break;
        case "infocenter01":
          webserviceUrl = `http://${host}/Mot64WebApi/siteService.svc/`;
          break;
        default:
          webserviceUrl = `http://${host}/Mot64WebApi/siteService.svc/`;
          break;
      }

      return `${webserviceUrl}GetDetailsByStationId?StationId=${stationId}`;
    },
  },
  transitionService: {
    getBusStopByMakat: (makat: string | number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetBusStopByMakat/${makat}/${language}/false`,

    getRovaDetails: (searchPlaceId: number, language: MotLanguages) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetRovaDetails/${searchPlaceId}/${language}/false`,

    getScheduleGridData: (
      dayOrder: number,
      fromQuarterId: number,
      firstConnId: number,
      secondConnId: number,
      toQuarterId: number,
      lineId: number,
      language: MotLanguages,
    ) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetScheduleList/${dayOrder}/${fromQuarterId}/${firstConnId}/${secondConnId}/${toQuarterId}/${lineId}/${language}/false`,

    sendMail: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/SendMail`,

    getTripLogDetails: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetTripLogDetails`,

    getBusStopList: () =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/GetBusStopList/`,

    postToServer: (methodName: string) =>
      `${MOT_BASE_URL}/${MOT_API_CONTROLLERS.passengerInfo}/${methodName}`,
  },
  validationService: null as never,
  httpService: null as never,
} as const;
