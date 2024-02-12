import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesConfig from "./routing/RoutesConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
