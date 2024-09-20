import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section id="about" title="关于畅霄科技" content="畅霄科技专注于差旅服务..." to="/about" />
                <Section id="services" title="差旅服务" content="我们提供综合最优、低价优先..." />
                <Section id="membership" title="会员权益" content="加入畅霄科技会员，享受我们的差旅服务..." />
                <Section id="contact" title="联系我们" content="电话: 19357191687 | 邮箱: info@changxiao.com" />
              </>
            }
          />
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
