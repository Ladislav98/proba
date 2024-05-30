import Home from "./ui/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import CreateOrder from "./features/order/CreateOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<p>Cart</p>} />
          <Route path="/order/new" element={<CreateOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
