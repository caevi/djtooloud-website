import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videos from './components/Videos';  // Import Videos component
import BookingForm from './components/BookingForm'; // Import Booking Form component
import Bookings from './components/Bookings'; // Import BookingList component
import AboutMe from './components/AboutMe';  // Import About Me component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/booking" element={<BookingForm />} />  
        <Route path="/bookings" element={<Bookings />} />  
        <Route path="/about" element={<AboutMe />} />  {/* Add About Me Route */}
      </Routes>
    </Router>
  );
};

export default App;
