import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Default marker icon fix for Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = ({
  center = [51.505, -0.09], // Default center (London)
  zoom = 13, // Default zoom level
  tileLayerURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // Default tile layer
  markers = [{ position: [51.505, -0.09]}], // Array of markers [{ position: [lat, lng], popup: "Text", icon: customIcon }]
  style = { height: "400px", width: "100%" },
}) => {
  return (
    <MapContainer center={center} zoom={zoom} style={style}>
      <TileLayer url={tileLayerURL} />

      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={ defaultIcon } // Use custom icon if provided
        >
          {marker.popup && <Popup>{marker.popup}</Popup>}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
