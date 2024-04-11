import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length , setLenght]=useState(8)
  const [number , setNumber]=useState(false);
  const [character , setCharacter]=useState(false)
  const [password , setPassword]=useState("")
   //useRef Hook

   const passwordRef = useRef(null)
  const passwordCreate =useCallback(() =>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "@!#$%&*~-_=+[]"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
     setPassword(pass)
  }, [length,number,character,setPassword]) 
  const copyToClipboard =useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{passwordCreate()},[length,number,character,passwordCreate])
  return (
    <>
      
      <div className="w-full  max-w-xl mx-auto shadow-md rounded-lg px-6 my-8 text-blue-800 bg-stone-100 font-bold tex-2xl ">
      <h1 className="text-4xl text-center text-black my-3">Password Generator</h1>
        <div className="flex w-full max-w-xl px-7 bg-gray-200 shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none  mt-2 mb-2 w-full py-4 px-7 font-bold text-2xl text-white bg-slate-600 rounded-lg"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button className="outline-none bg-blue-800 text-white hover:bg-blue-900 hover:text-white ml-1 px-8 py-0.2
           mb-2 mt-2 rounded-md shrink-0"
           onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm justify-center gap-x-5 py-3">
          <div className="flex items-center gap-x-2">
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLenght(e.target.value)}}
             />
             <label className="font-bold text-xl ">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox"
            defaultChecked={number}
            id="numberinput"
            onChange={()=>{setNumber((prev)=>!prev);
            }}
            />
             <label className="font-bold text-xl ">Number: {number}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox"
            defaultChecked={character}
            id="characterinput"
            onChange={()=>{setCharacter((prev)=>!prev);
            }}
            />
             <label className="font-bold text-xl ">Character: {character}</label>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
