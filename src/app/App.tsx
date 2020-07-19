import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from '../routing';

const App: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
