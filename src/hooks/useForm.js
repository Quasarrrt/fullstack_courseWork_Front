import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState();
  const [errors, setErrors] = useState();
  const [isValid , setIsValid] = useState(false);

  const handleChange = event => {
    const target = event.target;
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({...errors, [name] : target.validationMessage});
    setIsValid(target.closest('form').checkValidity())
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values.email)
    if (values.name && values.email && values.password) {
      callback(values.name, values.email, values.password);
    }
    else if (values.email && values.password){
      callback(values.email, values.password);
    }
    else {
      callback(values.name, values.email)
    }

  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isValid,
    setValues,
  };
}
export default useForm;
