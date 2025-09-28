// /src/components/Projects/CustomMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
  height: "300px",
  borderRadius: "12px",
};

export default function CustomMap() {
  return (
    <MapContainer
      center={[12.9716, 77.5946]} // Bangalore
      zoom={12}
      style={containerStyle}
    >
      {/* Free OpenStreetMap tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Example markers */}
      <Marker position={[12.9716, 77.5946]}>
        <Popup>Bangalore Center</Popup>
      </Marker>
      <Marker position={[12.9352, 77.6245]}>
        <Popup>Another marker</Popup>
      </Marker>
    </MapContainer>
  );
}
