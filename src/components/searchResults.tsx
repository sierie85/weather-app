import type { Geocoding } from "../types/geocoding";
import type { Location } from "../types/location";

export default function SearchResults({
  results,
  setLocation,
  resetResults,
}: {
  results: Geocoding[];
  setLocation: (location: Location) => void;
  resetResults: () => void;
}) {
  return (
    <ul className="absolute z-10 bg-white max-h-40 w-full overflow-y-auto">
      {results.map((r: Geocoding) => (
        <li
          key={r.id}
          className="min-h-10 w-full border-b-2 flex items-center px-10 text-black"
        >
          <button
            type="button"
            onClick={() => {
              setLocation({
                name: `${r.name} - ${r.admin1} ,${r.country}`,
                latitude: r.latitude,
                longitude: r.longitude,
              });
              resetResults();
            }}
          >
            {r.name}&nbsp;-&nbsp;{r.admin1}&nbsp;,{r.country}
          </button>
        </li>
      ))}
    </ul>
  );
}
