import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Info from "./components/Info";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
