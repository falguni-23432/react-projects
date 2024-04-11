import { useState } from "react";


function App() {
  const [color , setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-4 rounded-full ">
          <button className="outline-none px-6 py-3 rounded-2xl text-white font-bold text-xl shadow-lg"
          style ={{backgroundColor: "red"}}
          onClick={()=> setColor("Red")}>Red</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-white font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Black"}}
          onClick={()=> setColor("Black")}>Black</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-white font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Green"}}
          onClick={()=> setColor("Green")}>Green</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-white font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Blue"}}
          onClick={()=> setColor("Blue")}>Blue</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-black font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Orange"}}
          onClick={()=> setColor("Orange")}>Orange</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-black font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Pink"}}
          onClick={()=> setColor("Pink")}>Pink</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-white font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Purple"}}
          onClick={()=> setColor("Purple")}>Purple</button>
          <button className="outline-none px-6 py-3 rounded-2xl text-black font-bold text-xl shadow-lg"
          style ={{backgroundColor: "Yellow"}}
          onClick={()=> setColor("Yellow")}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
