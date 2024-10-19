import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CollegePage from './components/CollegePage';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from './components/Header'; // Assuming you have a Header component
import Footer from './components/Footer'; // Assuming you have a Footer component
import './App.css'; // Import your global styles if needed

function App() {
    return (
        <div>
            <Header /> {/* Render Header outside of Routes */}
            <Routes>
                <Route path="/" element={<CollegePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer /> {/* Render Footer outside of Routes */}
        </div>
    );
}

export default App;
