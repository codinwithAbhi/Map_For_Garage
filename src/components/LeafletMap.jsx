import React, { useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Marker Icons
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
});

const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 41],
});

const highlightedIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  iconSize: [30, 50], // Bigger when selected
});

const MapComponent = ({ center, userLocation, zoom = 13, setSidebarOpen, markers = [], setSelectedGarage }) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {userLocation && <Marker position={userLocation} icon={redIcon} />}

      {markers.map((garage) => (
        <Marker
          key={garage.id}
          position={garage.position}
          icon={selectedMarkerId === garage.id ? highlightedIcon : blueIcon}
          eventHandlers={{
            click: () => {
              setSelectedMarkerId(garage.id);
              setSelectedGarage(garage);
              setSidebarOpen(true);
            },
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
