import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">畅霄科技</div>
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/membership">会员权益</Link></li>
          <li><Link to="/contact">联系我们</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
