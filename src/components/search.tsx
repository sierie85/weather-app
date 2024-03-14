import { useState, useEffect } from "react";
import axios from "axios";
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

        if (!res.data) {
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
