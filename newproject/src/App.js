import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <h1>hi how are you?</h1>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
