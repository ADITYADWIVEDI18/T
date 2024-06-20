import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "./Custom Hook/useFormValidation";

const Form = () => {
  const {
    values,
    handleChange,
    errors,
    validateForm,
  } = useFormValidation();

  const { name, email, age, guestName, isAttendingWithGuest } = values;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      navigate("/summary", {
        state: { ...values },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        autoComplete="off"
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        autoComplete="off"
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <br />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={handleChange}
        autoComplete="off"
      />
      {errors.age && <span className="error">{errors.age}</span>}
      <br />

      <label>Are you attending with a guest?</label>
      <br />
      <label htmlFor="attendingYes">
        <input
          type="radio"
          id="attendingYes"
          name="isAttendingWithGuest"
          value="yes"
          checked={isAttendingWithGuest}
          onChange={handleChange}
        />
        Yes
      </label>
      <label htmlFor="attendingNo">
        <input
          type="radio"
          id="attendingNo"
          name="isAttendingWithGuest"
          value="no"
          checked={!isAttendingWithGuest}
          onChange={handleChange}
        />
        No
      </label>
      <br />

      {isAttendingWithGuest && (
        <>
          <label htmlFor="guestName">Guest Name:</label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            value={guestName}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.guestName && <span className="error">{errors.guestName}</span>}
          <br />
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
