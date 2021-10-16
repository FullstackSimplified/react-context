import { UserContextProvider } from "./context/UserContext";
import Cprofile from "./components/Cprofile";
import Fprofile from "./components/Fprofile";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Cprofile />
        <hr />
        <Fprofile />
      </div>
    </UserContextProvider>
  );
}

export default App;
