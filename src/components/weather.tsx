import useAxios from "../hooks/useAxiso";

import type { Location } from "../types/location";
import Loading from "./layout/loading";
import WeatherForcast from "./weatherForcast";
import WeatherToday from "./weatherToday";

export default function Weather({ location }: { location: Location }) {
  const { data, isError, isLoading } = useAxios({
    url: `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,weather_code,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=Europe%2FBerlin`,
    method: "get",
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error: {JSON.stringify(isError)}</p>;
  }

  return (
    <>
      {data && (
        <>
          <h1 className="text-4xl pb-5">Current weather for {location.name}</h1>
          <WeatherToday data={data} />
          <WeatherForcast data={data} />
        </>
      )}
      {/* <hr />
      <p>{JSON.stringify(location)}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}
