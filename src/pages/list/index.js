import Map from "@components/Map";
import { LocationData } from "../Data";

const DEFAULT_CENTER = [-7.3797534, 109.2401397];

export default function Home() {
  return (
    <Map className={"w-auto h-auto"} center={DEFAULT_CENTER} zoom={16}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {LocationData.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>
                <div>
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
        </>
      )}
    </Map>
  );
}
