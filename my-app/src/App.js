import './App.css';
import Header from './Components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Components/Form';



function App() {

 return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;

