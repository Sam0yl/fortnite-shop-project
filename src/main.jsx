import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './components/Shop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Shop />
        <Footer />
    </>
);
