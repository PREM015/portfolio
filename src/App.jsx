// 📁 src/App.jsx

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 🌐 Layout
import MainLayout from './layout/MainLayout';

// 🔼 Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// 🧰 Utils
import { formatDate } from './utils/formatDate';

// 💤 Lazy Load Pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <MainLayout>
      {/* 🔝 Navbar always visible */}
      <Navbar />

      {/* 🔁 Routes with lazy loading */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 🔄 Add more routes like /projects if needed */}
        </Routes>
      </Suspense>

      {/* 🔻 Footer always visible */}
      <Footer date={formatDate(new Date())} />
    </MainLayout>
  );
};

export default App;
