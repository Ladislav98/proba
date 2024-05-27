import Home from "./ui/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
