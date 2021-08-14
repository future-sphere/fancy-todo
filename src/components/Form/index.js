import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({ name: '', age: 0, email: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const { name, age, email } = form;

  return (
    <div>
      <h1>form</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <input type='text' onChange={handleChange} value={name} name='name' />
      <input type='number' onChange={handleChange} value={age} name='age' />
      <input type='email' onChange={handleChange} value={email} name='email' />
    </div>
  );
}

export default Form;
