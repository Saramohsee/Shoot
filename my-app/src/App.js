import './App.css';
import Footer from './Components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home'



 
function App() {

 return (
    <div className='App'>
    <Footer />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;



