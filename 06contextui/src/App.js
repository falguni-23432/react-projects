
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
        <Profile/>
      
      
    </UserContextProvider>
  );
}

export default App;
