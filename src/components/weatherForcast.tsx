import { useEffect, useState } from "react";
import weatherCodeTable from "../utils/weatherCodeTable";
import WeatherIcon from "./weatherIcons";

import type { Weather } from "../types/weather";

interface WeatherForcast {
  time: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  sunrise: string;
  sunset: string;
  wind_speed_10m_max: number;
  wind_direction_10m_dominant: number;
  uv_index_max: number;
  precipitation_sum: number;
  precipitation_probability_max: number;
}

export default function WeatherForcast({ data }: { data: Weather }) {
  const [weatherData, setWeatherData] = useState<WeatherForcast[]>([]);

  useEffect(() => {
    const days = data.daily.time.length;
    const temp = [];
    for (let i = 1; i < days; i++) {
      temp.push({
        time: data.daily.time[i],
        weather_code: data.daily.weather_code[i],
        temperature_2m_max: data.daily.temperature_2m_max[i],
        temperature_2m_min: data.daily.temperature_2m_min[i],
        sunrise: data.daily.sunrise[i],
        sunset: data.daily.sunset[i],
        wind_speed_10m_max: data.daily.wind_speed_10m_max[i],
        wind_direction_10m_dominant: data.daily.wind_direction_10m_dominant[i],
        uv_index_max: data.daily.uv_index_max[i],
        precipitation_sum: data.daily.precipitation_sum[i],
        precipitation_probability_max:
          data.daily.precipitation_probability_max[i],
      });
    }
    setWeatherData(temp);
  }, [data]);

  return (
    <>
      <h2 className="text-3xl py-5">6-Day Forcast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {weatherData.map((day, index) => (
          <div
            key={index}
            className="bg-white text-black border shadow-lg p-5 flex flex-col items-center"
          >
            <h3 className="text-lg">
              <strong>
                {new Date(day.time).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </strong>
              ,&nbsp;
              {new Date(day.time).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </h3>

            <div className="flex items-center">
              <WeatherIcon
                icon={weatherCodeTable[day.weather_code][`icon_day`]}
              />
            </div>

            <div className="flex items-center mb-5">
              <span className="italic">
                {weatherCodeTable[day.weather_code].name}
              </span>
            </div>

            <div className="flex items-center">
              <WeatherIcon
                icon="thermometer-glass-celsius"
                width={35}
                height={35}
              />
              <span>
                <strong>
                  {day.temperature_2m_max}°C / {day.temperature_2m_min}°C
                </strong>
              </span>
            </div>

            <div className="flex items-center">
              <WeatherIcon icon="umbrella" width={35} height={35} />
              <span>
                {day.precipitation_sum}mm / {day.precipitation_probability_max}%
              </span>
            </div>

            <div className="flex items-center">
              <WeatherIcon
                icon="compass"
                width={35}
                height={35}
                styles={{
                  transform: `rotate(${day.wind_direction_10m_dominant}deg)`,
                }}
              />
              <span>{day.wind_speed_10m_max}m/s</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
