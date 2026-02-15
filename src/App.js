import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
