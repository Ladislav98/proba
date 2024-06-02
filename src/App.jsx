import Home from "./ui/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order/new" element={<CreateOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
