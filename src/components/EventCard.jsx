// components/EventCard.jsx
import React from "react";
// import PropTypes from "prop-types";

function EventCard({ event }) {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
    </div>
  );
}

// EventCard.propTypes = {
//   event: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default EventCard;
