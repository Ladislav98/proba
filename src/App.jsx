import Home from "./ui/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<p>Cart</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
