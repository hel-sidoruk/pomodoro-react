import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from '../pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/statistics" element={<Pages.Statistics />} />
      <Route path="/settings" element={<Pages.Settings />} />
    </Routes>
  );
}
