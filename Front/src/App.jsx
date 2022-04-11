import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Register from './pages/Register';
import './Style/app.css';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Accueil />}/>
                <Route path='/inscription' element={<Register />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;

