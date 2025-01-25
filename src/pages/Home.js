import React, { useState, useEffect } from "react";
import MapComponent from "../components/LeafletMap";
import Sidebar from "../components/Sidebar";
import "../styles/home.css";

export default function Home() {
  const [userLocation, setUserLocation] = useState(null);
  const [garages, setGarages] = useState([]);
  const [selectedGarage, setSelectedGarage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);

          const nearbyGarages = await fetchNearbyGarages(latitude, longitude);
          setGarages(nearbyGarages);
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className={`home-container ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar (Left) */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        selectedGarage={selectedGarage} 
        closeGarage={() => setSelectedGarage(null)} 
      />

      {/* Map (Right) */}
      <div className="map-container">
        {userLocation && (
          <MapComponent 
            center={userLocation} 
            userLocation={userLocation} 
            markers={garages}
            setSidebarOpen = {setSidebarOpen} 
            setSelectedGarage={setSelectedGarage} 
          />
        )}
      </div>
    </div>
  );
}

// Dummy Garage Data
const fetchNearbyGarages = async (lat, lng) => {
  return [
    {
      id: 1,
      position: [lat + 0.002, lng + 0.002],
      name: "Elite Auto Repair",
      address: "123 Main Street, Downtown",
      rating: 4.5,
      distance: (Math.random() * 5 + 1).toFixed(2) + " km",
      openingHours: "9:00 AM - 6:00 PM",
      image: "https://i.pinimg.com/736x/93/f9/d7/93f9d702b9c1bd1defe62e589974e587.jpg",
    },
    {
      id: 2,
      position: [lat - 0.002, lng - 0.002],
      name: "Speedy Garage Services",
      address: "456 Elm Street, Midtown",
      rating: 4.2,
      distance: (Math.random() * 5 + 1).toFixed(2) + " km",
      openingHours: "8:00 AM - 7:00 PM",
      image: "https://i.pinimg.com/736x/94/65/fa/9465fab8ebf9c0268b97d08fd80fcfde.jpg",
    },
  ];
};
