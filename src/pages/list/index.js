'use client';

import Map from "@components/Map";
import { LocationData } from "../Data";
import { useContext, useState } from "react";
import { ThemeContext } from "src/context/themeContext";

const DEFAULT_CENTER = [-7.3797534, 109.2401397];

export default function Home() {

    // const [theme, setTheme] = useState("osm"); 
     const { theme } = useContext(ThemeContext);

    const handleThemeChange = (event) => {
      setTheme(event.target.value);
    };

  return (
    <Map
      className={"w-auto h-auto "}
      center={DEFAULT_CENTER}
      zoom={16}
      theme={theme}
    >
      {({ TileLayer, Marker, Popup }) => (
        <div className="">
          {LocationData.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>
                <div className="text-primary dark:text-dark">
                  <p className="font-bold">{location.name}</p>
                  Kepadatan&emsp;&emsp;: {location.density.toLocaleString()}{" "}
                  <br />
                  Populasi&emsp;&emsp;&emsp;:{" "}
                  {location.population.toLocaleString()} <br />
                  Pertumbuhan &emsp;: {location.growth}%
                </div>
              </Popup>
            </Marker>
          ))}
        </div>
      )}
    </Map>
  );
}
