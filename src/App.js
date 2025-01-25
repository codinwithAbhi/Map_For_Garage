import React from 'react';
import {Routes, Route } from "react-router";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  );
}

export default App;