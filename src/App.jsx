import './App.css';
import Button from './componets22/button';
import Products from './componets22/Products';
import Counter from './componets22/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import House from './pages/house';  // Ensure this is the correct path
import Pro from './pages/Pro';      // Ensure this is the correct path
import Items from './pages/Items';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<House />} />
        <Route path="/hi" element={<Pro />} />
        <Route path='/' element={<Items/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
