import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import VacancyPage from './Pages/VacancyPage/VacancyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
    </Routes>
  );
}

export default App;
