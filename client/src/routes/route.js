import Home from "../pages/home/Home";
import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default routes;
