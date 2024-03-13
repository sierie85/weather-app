export interface WeatherCodeTable {
  [key: number]: {
    name: string;
    icon_day: string;
    icon_night: string;
  };
}

const weatherCodeTable: WeatherCodeTable = {
  0: {
    name: "Clear sky",
    icon_day: "clear-day",
    icon_night: "clear-night",
  },
  1: {
    name: "Mainly clear",
    icon_day: "clear-day", // not perfect match?
    icon_night: "clear-night", // not perfect match?
  },
  2: {
    name: "Partly cloudy",
    icon_day: "partly-cloudy-day",
    icon_night: "partly-cloudy-night",
  },
  3: {
    name: "Overcast",
    icon_day: "overcast-day",
    icon_night: "overcast-night",
  },
  45: {
    name: "Fog",
    icon_day: "fog-day",
    icon_night: "fog-night",
  },
  48: {
    name: "Depositing rime fog",
    icon_day: "fog-day", // not perfect match?
    icon_night: "fog-night", // not perfect match?
  },
  51: {
    name: "Drizzle: Light intensity",
    icon_day: "drizzle",
    icon_night: "drizzle", // not perfect match?
  },
  53: {
    name: "Drizzle: Moderate intensity",
    icon_day: "drizzle",
    icon_night: "drizzle", // not perfect match?
  },
  55: {
    name: "Drizzle: Dense intensity",
    icon_day: "drizzle",
    icon_night: "drizzle", // not perfect match?
  },
  56: {
    name: "Freezing Drizzle: Light intensity",
    icon_day: "drizzle", // not perfect match?
    icon_night: "drizzle", // not perfect match?
  },

  57: {
    name: "Freezing Drizzle: Dense intensity",
    icon_day: "drizzle", // not perfect match?
    icon_night: "drizzle", // not perfect match?
  },
  61: {
    name: "Rain: Slight intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  63: {
    name: "Rain: Moderate intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  65: {
    name: "Rain: Heavy intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  66: {
    name: "Freezing Rain: Light intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  67: {
    name: "Freezing Rain: Heavy intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  71: {
    name: "Snow fall: Slight intensity",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  73: {
    name: "Snow fall: Moderate intensity",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  75: {
    name: "Snow fall: Heavy intensity",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  77: {
    name: "Snow grains",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  80: {
    name: "Rain showers: Slight intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  81: {
    name: "Rain showers: Moderate intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  82: {
    name: "Rain showers: Violent intensity",
    icon_day: "rain", // not perfect match?
    icon_night: "rain", // not perfect match?
  },
  85: {
    name: "Snow showers: Slight intensity",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  86: {
    name: "Snow showers: Heavy intensity",
    icon_day: "snow", // not perfect match?
    icon_night: "snow", // not perfect match?
  },
  95: {
    name: "Thunderstorm: Slight intensity",
    icon_day: "thunderstorms-day", // not perfect match?
    icon_night: "thunderstorms-night", // not perfect match?
  },
  96: {
    name: "Thunderstorm: Moderate intensity",
    icon_day: "thunderstorms-day", // not perfect match?
    icon_night: "thunderstorms-night", // not perfect match?
  },
  99: {
    name: "Thunderstorm: Heavy intensity",
    icon_day: "thunderstorms-day", // not perfect match?
    icon_night: "thunderstorms-night", // not perfect match?
  },
};

export default weatherCodeTable;
