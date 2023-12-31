import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './app/context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/bookfinder">
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
