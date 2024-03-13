import { Tab } from "@headlessui/react";
import WeatherChart from "./weatherChart";
import WeatherIcon from "./weatherIcons";

import type { Weather } from "../types/weather";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function WeatherChartTab({ data }: { data: Weather }) {
  const tabList = ["Temperatur", "Rain", "UV-Index", "More Information"]; // + uv-index???

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 p-1">
        {tabList.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-stone-100 text-gray-900 shadow"
                  : "text-gray-900 hover:bg-stone-100 hover:text-gray-900 border"
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <WeatherChart
            hourlyData={data.hourly}
            seriesData="temperature_2m"
            name="Temperature"
            color="#94a3b8"
          />
        </Tab.Panel>
        <Tab.Panel>
          <WeatherChart
            hourlyData={data.hourly}
            seriesData="rain"
            name="Rain"
            color="#94a3b8"
          />
        </Tab.Panel>
        <Tab.Panel>
          <WeatherChart
            hourlyData={data.hourly}
            seriesData="uv_index"
            name="UV-Index"
            color="#94a3b8"
          />
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex items-center">
            <WeatherIcon icon="sunrise" width={50} height={50} />
            <span>
              {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
                hour12: false,
              })}
            </span>
          </div>
          <div className="flex items-center">
            <WeatherIcon icon="sunset" width={50} height={50} />
            <span>
              {" "}
              {new Date(data.daily.sunset[0]).toLocaleTimeString("en-US", {
                hour12: false,
              })}
            </span>
          </div>
          <div className="flex items-center">
            <WeatherIcon icon="uv-index" width={50} height={50} />
            <span>{data.daily.uv_index_max[0]}</span>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
