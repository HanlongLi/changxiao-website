import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <header className="section-header">
          <h1>关于我们</h1>
          <p>畅霄科技自成立以来，一直致力于提供优质的差旅服务...</p>
          <p>畅霄科技致力于打造年轻学生学者社群，
            用新时代的理念和创新推动产业升级。
            主营业务以3D建模为基础，
            打造数字孪生元宇宙交互平台，
            和定制化模型设计。
            依托互联网+的力量，
            公司同时打造了畅销中国公益项目，
            用业务主线扶持果蔬销售。</p>
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
          <p>我们是一只年轻有活力的团队，但我们的团队成员拥有丰富的行业经验和专业知识，我们共同致力于推动畅霄科技的发展和创新</p>
          <div className="member">
          <img src={require('./2.jpg')} alt="团队成员" className="member-image" />
            <div className="member-info">
              <h3>杨子霄</h3>
              <p>CEO - 创始人</p>
            </div>
            <div>
              <h3>冯畅</h3>
              <p>人才和发展管理监事</p>
              <div> 
                <h3>李翰龙</h3>
                  <p>移动端软件开发总监</p>
              </div>
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
            <p>京东</p>
          <div className="partner-logos">
            {/* 客户logo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
