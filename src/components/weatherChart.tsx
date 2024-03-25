import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import type { Hourly } from "../types/weather";

export default function WeatherChart({
  hourlyData,
  seriesData,
  name,
  color,
}: {
  hourlyData: Hourly;
  seriesData: string;
  name: string;
  color: string;
}) {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    const currentDay = new Date();
    const currentIndex = hourlyData.time.findIndex(function (x) {
      return new Date(x).valueOf() >= currentDay.valueOf();
    });

    const categories = hourlyData.time
      .slice(currentIndex, currentIndex + 24)
      .map((time) =>
        new Date(time).toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    const data = hourlyData[seriesData as keyof Hourly]
      .slice(currentIndex, currentIndex + 24)
      .map((n) => +n);

    setOptions({
      chart: {
        id: `wheater-chart-${seriesData}`,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories,
      },
      colors: [color],
    });
    setSeries([
      {
        name: name,
        data: data,
      },
    ]);
  }, [hourlyData, seriesData, name, color]);

  if (series.length === 0) return null;

  return <Chart options={options} series={series} type="line" height="225" />;
}
