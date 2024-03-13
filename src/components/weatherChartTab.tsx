import { Tab } from "@headlessui/react";
import WeatherChart from "./weatherChart";

import type { Hourly } from "../types/weather";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function WeatherChartTab({
  hourlyData,
}: {
  hourlyData: Hourly;
}) {
  const tabList = ["Temperatur", "Rain", "More Props"];

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
            hourlyData={hourlyData}
            seriesData="temperature_2m"
            name="Temperature"
          />
        </Tab.Panel>
        <Tab.Panel>
          <WeatherChart hourlyData={hourlyData} seriesData="rain" name="Rain" />
        </Tab.Panel>
        <Tab.Panel>More Props</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
