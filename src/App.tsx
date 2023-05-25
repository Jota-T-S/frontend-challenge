import "./index.css";
import { UserProvider } from "./context/UserProvider";
import { Routing } from "./routes/Routing.routes";

function App() {
  return (
    <>
      <UserProvider>
        <Routing />
      </UserProvider>
    </>
  );
}

export default App;
