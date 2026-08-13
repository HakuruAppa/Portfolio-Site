import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home.tsx'
import Contact from './pages/contact.tsx'
import Navbar from './pages/navbar.tsx'
import Dev from './pages/dev.tsx'
import Art from './pages/art.tsx'
import Footer from './pages/footer.tsx'


function App() {
  return (
    <BrowserRouter>
      <Footer />
      <Navbar />
      
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/art" element={<Art />} />
        <Route path="*" element={<Home />} />
      </Routes>
</div>
    </BrowserRouter>
  );
}

export default App;
