import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Layout from "./Layout"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listings" element={<Listings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
