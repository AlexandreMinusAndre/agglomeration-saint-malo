import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Accueil from './pages/Accueil';
import Register from './pages/Register';
import Alimentaire from './pages/Alimentaire';
import Post from './components/Post';
import Profil from './pages/Profil';
import './Style/app.css';

const App = () => {

    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Accueil />}/>
                <Route path='/inscription' element={<Register />}/>
                <Route path='/alimentation' element={<Alimentaire />}/>
                <Route path='/profil' element={<Profil />}/>
                <Route path='/post' element={<Post />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;

