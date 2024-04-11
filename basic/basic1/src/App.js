import {useState} from 'react'



function App() {

  let [counter , setCounter ] = useState(15)
  const addValue= () =>{
    if(counter<20){
      setCounter(counter + 1)
    }else{
      alert("number limit exceed");
    }
    }
  
  const removeValue= () =>{
    if(counter>0){
      setCounter(counter - 1)
    }else{
      alert("number can't be negative");
    }
  }
  return (
  <div className="bg-blue-800 w-full ">
  <h1 className="text-center text-3xl font-bold text-red-200">Hello</h1>
  <h2 className="text-center font-bold uppercase">Counter Value:{counter}</h2>
  <button 
  onClick={addValue}
  className=" ml-32 items-center w-40 m-2 border-2 border-black ">Add value</button>
  <button onClick={removeValue} className="items-center w-40 m-2 border-2 border-black">Remove value</button>
  </div>
  );
}

export default App;
