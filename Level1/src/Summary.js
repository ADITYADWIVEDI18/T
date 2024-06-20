import React from "react";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const { name, email, age, isAttendingWithGuest, guestName } = location.state || {};

  return (
    <div>
      <h2>Summary</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Attending with Guest: {isAttendingWithGuest ? "Yes" : "No"}</p>
      {isAttendingWithGuest && <p>Guest Name: {guestName}</p>}
    </div>
  );
};

export default Summary;
