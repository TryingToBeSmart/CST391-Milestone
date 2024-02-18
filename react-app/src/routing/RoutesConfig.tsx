import { Routes, Route } from "react-router-dom";
import DisplayMedia from "../components/DisplayMedia";
import Home from "../components/Home";
import MyWatchList from "../components/MyWatchList";
import AdminDisplay from "../components/admin/AdminDisplay";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/displayMedia" element={<DisplayMedia />} />
      <Route path="/myWatchList" element={<MyWatchList />} />
      <Route path="/admin" element={<AdminDisplay />} />
    </Routes>
  );
};

export default RoutesConfig;
