export interface CityI {
  ID: number;
  NAME: string;
  PRIORITY: number;
}

export interface BusStopI {
  /** The 5-digit code on the physical sign */
  Makat: number;
  Id: number;
  Name: string;
  HebrewName: string;
  EnglishName: string;

  Latitude: number;
  Longitude: number;
  Distance: number;

  /** This is the container for the lines */
  LineList: BusLineI[];

  LinesString: string | null;

  // Metadata and UI fields
  ArrivalTime: string | null;
  /** @deprecated figure out if this ever gets any information */
  BoardingAlighting: string | null;

  BusStopTypeId: number;
  /** @deprecated figure out if this ever gets any information */
  HebrewBusStopType: string | null;
  /** @deprecated figure out if this ever gets any information */
  EnglishBusStopType: string | null;

  /** @deprecated figure out if this ever gets any information */
  HebrewPlaceDescription: string | null;
  /** @deprecated figure out if this ever gets any information */
  EnglishPlaceDescription: string | null;

  MessageExists: number;

  PlaceId: number;
  /** @deprecated figure out if this ever gets any information */
  PlatformId: string | null;
  /** @deprecated figure out if this ever gets any information */
  TimeFromOrigin: string | null;
}

export interface BusLineI {
  /** Specific internal IDs */
  ID: number;
  /** The line number shown to the public (e.g., " 65", " 19א") */
  Shilut: string;
  /** Internal Ministry of Transport Line ID */
  MotLineId: number;

  /** Full route description (e.g., "Jerusalem - Har Nof to Pisgat Ze'ev") */
  Description: string;
  DescriptionEngName: string;

  /** Operator details */
  CompanyName: string;
  CompanyHebrewName: string;
  CompanyEnglishName: string | null;
  CompanyId: number;

  /** Route details */
  BusStopHebrewName: string;
  BusstopType: string; // e.g., "איסוף והורדה"
  Direction: string | null;
  MotDirection: number;
  Chalufa: string;

  DestinationQuarterName: string;
  DestinationQuarterId: string;
  /** @deprecated figure out if this ever gets any information */
  DestinationName: string | null;
  /** usually 0?! */
  DestinationMakat: number;

  /** Real-time / Timing info */
  MinutesToArrival: number;
  MinutesToArrivalList: unknown | null; // Misc
  DtArrival: string; // ISO Date string (often 9999-12-31 if no data)
  Distance: number;
  DistanceFromStart: number;
  TripsPerDay: number;
  /** Information about the line, such as delays or shutdowns */
  Remark: string | null;

  /** Misc - couldn't determine these */
  MotVariation: string;
  MessageExists: number;
  //** The typo is in the original */
  ResponseSuccesed: boolean;
  SiriDirectionRef: number;
  /** @deprecated figure out if this ever gets any information */
  SourceName: unknown | null;
  /** @deprecated figure out if this ever gets any information */
  NAME: string | null;
}
