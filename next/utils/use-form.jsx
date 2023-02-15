'use client';

import { useState, useCallback } from "react";
export default function useForm() {
  const [values, setValues] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleReset = useCallback((
    newValues = {}, newIsValid = false
  ) => {
    setValues(newValues)
    setIsValid(newIsValid)
  })

  const handleChange = (evt) => {
    const target = evt.target
    const inputName = target.name;
    const inputValue = target.value;

    setValues({
      ...values,
      [inputName]: inputValue,
    })
    setIsValid(target.closest('form').checkValidity())
  };

  return {
    values,
    isValid,
    handleReset,
    handleChange,

  }
}