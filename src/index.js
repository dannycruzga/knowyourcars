import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Ford from './pages/ford/Ford';
import Chevrolet from './pages/chevrolet/Chevrolet';
import Dodge from './pages/dodge/Dodge';
import Mercedes from './pages/mercedes/Mercedes';

const App = () => {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ford" element={<Ford />} />
            <Route path="chevrolet" element={<Chevrolet />} />
            <Route path="dodge" element={<Dodge />} />
            <Route path="mercedes" element={<Mercedes />} />
          </Route>
        </Routes>
      </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
