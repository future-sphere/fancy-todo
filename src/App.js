// import { useState } from 'react';
import './App.css';
// import AddingNumbers from './components/AddingNumbers';
// import Card from './components/Card';
// import Form from './components/Form';
import Todolist from './components/Todolist';

// const users = [
//   {
//     name: 'Peter',
//     title: 'Architect',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//   },
//   {
//     name: 'Jerry',
//     title: 'Race car driver',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//   },
//   {
//     name: 'Ben',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//     title: 'Herpetologist',
//   },
//   {
//     name: 'Ryan',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//     title: 'Uber Driver',
//   },
//   {
//     name: 'Bryan Wang',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//     title: 'Rheumatologist',
//   },
//   {
//     name: 'Owen Zou',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//     title: 'IT Guy',
//   },
//   {
//     name: 'Steven Deng',
//     avatar: 'https://www.w3schools.com/howto/img_avatar.png',
//     title: 'Researcher',
//   },
// ];

function App() {
  // const [value, setValue] = useState(0);
  // const [data, setData] = useState(0);

  // const handleAdd = () => {
  //   setValue(value + 1);
  // };

  // const handleSubtract = () => {
  //   setValue(value - 1);
  // };

  // const handleReset = () => {
  //   setValue(0);
  // };

  // const handleAddData = () => {
  //   setData(data + 1);
  // };

  // const handleSubtractData = () => {
  //   setData(data - 1);
  // };

  // const handleResetData = () => {
  //   setData(0);
  // };

  return (
    <div className='App'>
      <Todolist />
      {/* <AddingNumbers /> */}
      {/* <Form /> */}
      {/* <button onClick={handleAdd}>Add +</button>
      <button onClick={handleSubtract}>Subtract -</button>
      <button onClick={handleReset}>Reset</button>
      <p>value: {value}</p>
      <p>data: {data}</p>
      <div></div>
      <button onClick={handleAddData}>Add +</button>
      <button onClick={handleSubtractData}>Subtract -</button>
      <button onClick={handleResetData}>Reset</button> */}
      {/* {users.map((v, i) => (
        <Card {...v} key={i} />
      ))} */}
      {/* <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type='text'
      /> */}
      {/* <button
        onClick={() => {
          setValue('Bye world');
        }}
      >
        Change value to bye world
      </button>
      <button
        onClick={() => {
          setValue('hello world');
        }}
      >
        Change value to hello world
      </button> */}
    </div>
  );
}

export default App;
