import React, { useState } from 'react';
import './index.css';

function AddingNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div className='container'>
      <h1>Adding Two Numbers</h1>
      <div className='form'>
        <input
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          type='number'
        />
        <input
          type='number'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={() => setResult(+num1 + +num2)}>Add Them!</button>
      <p>{result}</p>
    </div>
  );
}

export default AddingNumbers;
