
import './App.css';
import AddTodo from './Components/AddToDo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Learn About Redux ToolKit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
