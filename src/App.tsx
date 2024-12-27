import Fashion from "./Router/Fashion";
import Beauty from "./Router/Beauty";
import Sports from "./Router/Sports";
import Electronics from "./Router/Electronics";
import Furniture from "./Router/Furniture";
import Navbar from "./Router/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/abc" element={<Fashion />} />
          <Route path="/xyz" element={<Beauty />} />
          <Route path="/pqr" element={<Sports />} />
          <Route path="/mno" element={<Electronics />} />
          <Route path="/ijk" element={<Furniture />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
