import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import PaymentComplete from "./components/detail/PaymentComplete";
import ReservationPage from "./pages/ReservationPage";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollToTop />
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
