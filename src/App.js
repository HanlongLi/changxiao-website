import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section id="about" title="关于畅霄科技" content="畅霄科技专注于差旅服务..." />
      <Section id="services" title="差旅服务" content="我们提供综合最优、低价优先..." />
      <Section id="membership" title="会员权益" content="加入畅霄科技会员，享受我们的差旅服务..." />
      <Section id="contact" title="联系我们" content="电话: 123-456-7890 | 邮箱: info@changxiao.com" />
      <Footer />
    </div>
  );
}

export default App;
