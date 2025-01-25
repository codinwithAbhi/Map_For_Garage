import React from "react";
import PropTypes from "prop-types";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, selectedGarage, closeGarage }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        {isOpen && <h4>Nearby Locations</h4>}
        <MDBBtn floating className="toggle-btn" onClick={toggleSidebar}>
          <MDBIcon fas icon={isOpen ? "angle-left" : "angle-right"} />
        </MDBBtn>
      </div>

      {/* Sidebar Content (Only Show When Open) */}
      {isOpen && (
        <div className="sidebar-content">
          {selectedGarage ? (
            <MDBCard className="garage-card">
              {/* ✅ Apply Fixed Image Size */}
              <MDBCardImage src={selectedGarage.image} position="top" alt={selectedGarage.name} className="garage-image" />
              <MDBCardBody>
                <MDBCardTitle>{selectedGarage.name}</MDBCardTitle>
                <MDBCardText>📍 {selectedGarage.address}</MDBCardText>
                <MDBCardText>⭐ {selectedGarage.rating} / 5</MDBCardText>
                <MDBCardText>📏 {selectedGarage.distance} away</MDBCardText>
                <MDBCardText>🕒 {selectedGarage.openingHours}</MDBCardText>
                <MDBBtn color="danger" onClick={closeGarage}>Close</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          ) : (
            <p className="info-text">Click on a marker to see details</p>
          )}
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  selectedGarage: PropTypes.object,
  closeGarage: PropTypes.func.isRequired,
};

export default Sidebar;
