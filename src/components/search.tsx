import { useState, useEffect } from "react";
import axios from "axios";
import { useGeolocation } from "@uidotdev/usehooks";
import SearchInput from "./searchInput";
import SearchResults from "./searchResults";
import type { Geocoding } from "../types/geocoding";
import type { Location } from "../types/location";

export default function Search({
  setLocation,
}: {
  setLocation: (location: Location) => void;
}) {
  const [squery, setSQuery] = useState<string>("");

  const [results, setResults] = useState<Geocoding[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://geocoding-api.open-meteo.com/v1/search?name=${squery}&count=10`,
        });

        if (res.data.results.length === 0) {
          return console.log("No results found");
        }
        setResults(res.data.results);
      } catch (error: any) {
        console.log(error);
      }
    };

    const handler = setTimeout(() => {
      if (squery.length >= 3) {
        fetchData();
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [squery]);

  const geolocation = useGeolocation();

  useEffect(() => {
    if (
      geolocation.loading === false &&
      geolocation.latitude !== null &&
      geolocation.longitude !== null
    ) {
      const fetchData = async () => {
        try {
          // TODO: make own api to hide key |fastify or symfony
          const res = await axios({
            method: "GET",
            url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${
              geolocation.latitude
            }&lon=${geolocation.longitude}&limit=1&appid=${
              import.meta.env.VITE_OPENWEATHERMAP_API_KEY
            }`,
          });

          if (!res) {
            return console.log("No results found");
          }

          setLocation({
            name: `${res.data[0].name} - ${res.data[0].state}, ${res.data[0].country}`,
            latitude: geolocation.latitude !== null ? geolocation.latitude : 0,
            longitude:
              geolocation.longitude !== null ? geolocation.longitude : 0,
          });
        } catch (error: any) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [geolocation, setLocation]);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLocation({
      name: results[0].name,
      latitude: results[0].latitude,
      longitude: results[0].longitude,
    });
    setResults([]);
  };

  return (
    <form className="w-full mx-auto relative" onSubmit={onSubmit}>
      <SearchInput setSQuery={setSQuery} />
      {results?.length > 0 && (
        <SearchResults
          results={results}
          setLocation={setLocation}
          resetResults={() => setResults([])}
        />
      )}
    </form>
  );
}
