import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home.tsx'
import Contact from './pages/contact.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
