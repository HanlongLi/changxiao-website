import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">畅霄科技</div>
      <nav>
        <ul>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#services">差旅服务</a></li>
          <li><a href="#membership">会员权益</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
