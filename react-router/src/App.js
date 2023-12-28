import './App.css';
import { Home } from './Components/Home';
import { Routes, Route } from 'react-router-dom'
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { OrderAummary } from './Components/OrderAummary';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/order-summary' element = { <OrderAummary /> } />
    </Routes>
    </>
    
  );
}

export default App;
