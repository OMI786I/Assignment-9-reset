import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";
import Aos from "aos";
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const Leaflet = () => {
  useEffect(() => {
    Aos.init({ duration: "500" });
  }, []);
  return (
    <div data-aos="fade-down">
      <h1 className="text-center text-3xl my-20">You can find us Here!</h1>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={customIcon}>
            <Popup>
              We are Here! <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;
