import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/iletisim';
import Raporlar from './pages/raporlar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/raporlar" element={<Raporlar />} />
      <Route path="*" element={<div>sayfa yok</div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
