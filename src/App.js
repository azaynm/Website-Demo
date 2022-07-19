import './App.css';
import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';
import Footer from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
