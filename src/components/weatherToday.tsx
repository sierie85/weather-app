import weatherCodeTable from "../utils/weatherCodeTable";
import WeatherIcon from "./weatherIcons";
import WeatherChartTab from "./weatherChartTab";

import type { Weather } from "../types/weather";

export default function WeatherToday({ data }: { data: Weather }) {
  return (
    <div className="bg-white text-black border shadow-lg p-5">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        <div className="flex items-center justify-center md:col-span-1">
          <WeatherIcon
            icon={
              weatherCodeTable[data.daily.weather_code[0]][
                `icon_${data.current.is_day ? "day" : "night"}`
              ]
            }
            width={200}
            height={200}
          />
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg">
            {new Date(data.daily.time[0]).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <p className="italic mb-5">
            {weatherCodeTable[data.current.weather_code].name}
          </p>
          <div className="flex items-center">
            <WeatherIcon
              icon="thermometer-glass-celsius"
              width={50}
              height={50}
            />
            <span>
              <strong>
                {data.daily.temperature_2m_max[0]}°C /{" "}
                {data.daily.temperature_2m_min[0]}°C
              </strong>
            </span>
          </div>

          <div className="flex items-center">
            <WeatherIcon icon="umbrella" width={50} height={50} />
            <span>
              {data.daily.precipitation_sum[0]}mm /{" "}
              {data.daily.precipitation_probability_max[0]}%
            </span>
          </div>

          <div className="flex items-center">
            <WeatherIcon
              icon="compass"
              width={50}
              height={50}
              styles={{
                transform: `rotate(${data.daily.wind_direction_10m_dominant[0]}deg)`,
              }}
            />
            <span>{data.daily.wind_speed_10m_max[0]}m/s</span>
          </div>

          <div className="flex items-center">
            <WeatherIcon icon="humidity" width={50} height={50} />
            <span>{data.current.relative_humidity_2m}%</span>
          </div>
        </div>
        <div className="md:col-span-4">
          <WeatherChartTab data={data} />
        </div>
      </div>
    </div>
  );
}
