import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MyWatchList from "./components/MyWatchList";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myWatchList" element={<MyWatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
