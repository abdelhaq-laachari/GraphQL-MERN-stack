import Home from "../pages/home/Home";
import Add from "../components/add/Update";
import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<App />} />
          <Route path="/client/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default routes;
