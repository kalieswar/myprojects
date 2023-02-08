import About from './About';
import './App.css';
import TopNavbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './Footer';
import Services from './Services';
import Pricing from './Pricing';
import Notfound from './Notfound';
import Login from './login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <TopNavbar/>
      <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/services'} element={<Services/>}/>
      <Route path={'/pricing'} element={<Pricing/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
