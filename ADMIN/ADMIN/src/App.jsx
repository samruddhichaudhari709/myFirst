import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Registration';
import Login from './components/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
