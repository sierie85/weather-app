import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Search from "./components/search";
import Weather from "./components/weather";
import HowTo from "./components/intro";

import type { Location } from "./types/location";
import Footer from "./components/layout/footer";

export default function App() {
  const [lsLocation, saveLsLocation] = useLocalStorage<Location | null>(
    "location",
    null
  );
  const [location, setLocation] = useState<Location | null>(lsLocation || null);

  useEffect(() => {
    saveLsLocation(location);
  }, [location, saveLsLocation]);

  return (
    <>
      <div className="bg-stone-50 text-neutral-900 min-h-screen px-4">
        <div className="container mx-auto py-10 flex justify-around items-center">
          <h1 className="text-3xl pr-5">
            <a href="/">
              <img
                src="./logo.svg"
                alt="weather app logo"
                width="60"
                height="60"
              />
            </a>
          </h1>
          <Search setLocation={setLocation} />
        </div>
        <div className="container mx-auto py-5">
          {location !== null ? <Weather location={location} /> : <HowTo />}
        </div>
      </div>
      <Footer />
    </>
  );
}
