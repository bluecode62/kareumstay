import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import { useState } from "react";
import PaymentComplete from "./components/detail/PaymentComplete";
import ReservationPage from "./components/reservation/ReservationPage";

function App() {
  const [isPaid, setIsPaid] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/payment-complete" element={<PaymentComplete />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
