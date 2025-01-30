import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/page/Homepage";
import CounterPage from "../src/page/Counter";
import TabsPage from "../src/page/Tabs";
import ModalPage from "../src/page/ModalPage";
import UsersPage from "../src/page/UsersPage";

export const RoutersApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/tabs" element={<TabsPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
};
