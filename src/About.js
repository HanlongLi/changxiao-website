import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <header className="section-header">
          <h1>关于我们</h1>
          <p>畅霄科技自成立以来，一直致力于提供优质的差旅服务...</p>
        </header>
        
        <div className="timeline">
          <div className="timeline-event">
            <h2>2024年</h2>
            <p>公司成立，确立差旅服务方向...</p>
          </div>
          {/* 更多时间线事件 */}
        </div>
        
        <div className="team-members">
          <h2>我们的团队</h2>
          <div className="member">
          <img src={require('./2.jpg')} alt="团队成员" className="member-image" />
            <div className="member-info">
              <h3>杨子霄</h3>
              <p>CEO - 创始人</p>
            </div>
            <div>
              <h3>冯畅</h3>
              <p>人才和发展管理监事</p>
            </div>
          </div>
          {/* 更多团队成员 */}
        </div>
        
        <div className="values">
          <h2>我们的价值观</h2>
          <p>客户至上，诚信为本...</p>
        </div>
        
        <div className="partners">
          <h2>合作伙伴</h2>
          <div className="partner-logos">
            {/* 客户logo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
