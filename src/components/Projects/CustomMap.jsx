// /src/components/Projects/CustomMap.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix missing marker icons in React build
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Helper component to recenter map when locations change
function RecenterMap({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 12); // zoom 12
    }
  }, [center, map]);
  return null;
}

export default function CustomMap({ locations }) {
  // Center on the first location, or default to Delhi
  const mapCenter =
    locations.length > 0
      ? [locations[0].lat, locations[0].lng]
      : [28.6139, 77.209];

  return (
    <MapContainer center={mapCenter} zoom={12} style={containerStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((city, index) => (
        <Marker key={index} position={[city.lat, city.lng]}>
          <Popup>
            <strong>{city.name}</strong> <br />
            {city.projects} Project{city.projects > 1 ? "s" : ""} Available
          </Popup>
        </Marker>
      ))}

      <RecenterMap center={mapCenter} />
    </MapContainer>
  );
}
