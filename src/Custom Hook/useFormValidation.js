import { useState } from "react";

const useFormValidation = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    guestName: "",
    isAttendingWithGuest: false,
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const { name, email, age, isAttendingWithGuest, guestName } = values;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim() || !validateEmail(email)) {
      newErrors.email = "Email is required and must be a valid email format";
    }

    if (!age.trim() || isNaN(age) || parseInt(age) <= 0) {
      newErrors.age = "Age is required and must be a number greater than 0";
    }

    if (isAttendingWithGuest && !guestName.trim()) {
      newErrors.guestName = "Guest Name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setValues({
      ...values,
      [name]: newValue,
    });
  };

  return {
    values,
    handleChange,
    errors,
    validateForm,
  };
};

export default useFormValidation;
