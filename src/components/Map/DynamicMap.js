import { useEffect, useState } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";

const { MapContainer, TileLayer, Marker, Popup, Polygon } = ReactLeaflet;

const Map = ({ children, className, theme = "osm", ...rest }) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  const getTileLayerUrl = () => {
    switch (theme) {
      case "dark":
        return "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"; // Dark Matter dari CartoDB
      case "light":
        return "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"; // Positron dari CartoDB
      case "stamen-watercolor":
        return "https://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"; // Stamen Watercolor
      case "stamen-terrain":
        return "https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png"; // Stamen Terrain
      case "osm":
      default:
        return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // OpenStreetMap Default
    }
  };

  const calculateArea = (latlngs) => {
    // Menghitung luas dalam meter persegi
    const polygon = Leaflet.polygon(latlngs);
    return Leaflet.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]); // Menggunakan fungsi geodesicArea dari Leaflet
  };

  const handleMapClick = (event) => {
    console.log("Map clicked at:", event.latlng);
    const newMarker = event.latlng;
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <MapContainer className={mapClassName} onClick={handleMapClick} {...rest}>
      <TileLayer
        url={getTileLayerUrl()}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>
            Marker {index + 1}: {position.lat.toFixed(5)},{" "}
            {position.lng.toFixed(5)}
          </Popup>
        </Marker>
      ))}
      {markers.length > 2 && (
        <Polygon positions={markers} color="blue">
          <Popup>Luas: {calculateArea(markers).toFixed(2)} meter persegi</Popup>
        </Polygon>
      )}
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
