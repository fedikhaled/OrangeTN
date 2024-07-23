import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
/*import Apropos from './components/Apropos'; // Assurez-vous que ces composants existent
import Profile from './components/Profile';
import Numero from './components/Numero';
import Offer from './components/Offer';
import Contrat from './components/Contrat';
import Reclamation from './components/Reclamation';*/
import Editprofile from './components/Editprofile';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AcheterNumero from './components/AcheterNumero';
import Offers from './components/Offers';
import AboutUs from './components/Apropos';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import SimEsimForm from './components/AchatSimEsim';
function App() {
  return (
    <Router>
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Editprofile />} />
            <Route path="/acheter-numero" element={<SimEsimForm />} />
            <Route path="/apropos" element={<AboutUs />} />
            <Route path="/offer" element={<Offers />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/Login" element={<LoginForm />} />
            {/*<Route path="/apropos" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/numero" element={<Numero />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/contrat" element={<Contrat />} />
            <Route path="/reclamation" element={<Reclamation />} />*/}
          </Routes>
       
      </div>
    </Router>
  );
}

export default App;
