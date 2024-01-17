import './App.css';
import Footer from './Components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Products from './Pages/Products'
import LandingPage from './Pages/LandingPage'



 
function App() {

 return (
    <div className='App'>
    <Footer />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/products" element={<Products />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  </div>
  );
}

export default App;



