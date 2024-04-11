import Cards from "./Components/Cards";

function App() {
  return (
    <>
    <div className="justify-center">
    <h1 className="text-center font-black text-3xl bg-gray-400">View Card</h1>
    <Cards username="Product 1" btnText="Visit Me"/>
    <Cards username="Product 2"btnText="Click Me"/>
    </div>
    </>
  );
}

export default App;
