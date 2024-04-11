
import { useState } from 'react';
import './App.css';

function App() {
  const [value , setValue] = useState(1)
  let multiplyvalue = value * 10
  const multiplybyten = () =>{
    setValue(value + 1)
  }
  return (
    <div className='text-center mt-80'>
    <h1 className='font-bold text-6xl mb-8'>Main Value {value}</h1>
    <button onClick={multiplybyten} className='bg-gray-400 h-20 w-56 mb-5 rounded-md text-lg font-semibold'
    >Click To Multiply by 10</button>
    <h2 className='font-bold text-3xl mt-5 '>Multiplied Value {multiplyvalue}</h2>
    </div>
  );
}

export default App;
