import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

const Section = ({ id, title, content , to}) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <p>{content}</p>
      {to && <Link to={to} className="link">了解更多</Link>}
    </section>
  );
};

export default Section;
