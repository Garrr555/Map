import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

const { MapContainer, TileLayer } = ReactLeaflet;

const Map = ({ children, className, theme = "osm", ...rest }) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

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
        return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // OpenStreetMap Default
      default:
        return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // OpenStreetMap Default
    }
  };



  return (
    <MapContainer className={mapClassName} {...rest}>
      <TileLayer
        url={getTileLayerUrl()}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
