import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <img src="/差旅会员.png" alt="差旅服务" className="services-image" />
      </header>

      <section className="services-intro">
        <h2>服务介绍</h2>
        <p>
          差旅服务是一项旨在为企业员工或个人在因公出差期间提供全面支持和便利的综合性服务。
          我们的服务包括交通预订、酒店预订、行程规划、费用管理和紧急援助，帮助企业更好地完成人员调配，助力企业发展。
        </p>
      </section>

      <section className="services-details">
        <div className="details-content">
          <h2>服务内容</h2>
          <ul>
            <li>交通预订：机票、火车票、汽车票等交通工具的预订和安排。</li>
            <li>酒店预订：根据出差地点、预算和需求为出差人员预定合适的住宿。</li>
            <li>行程规划：制定合理的行程路线和时间安排，确保出差任务高效完成。</li>
            <li>费用管理：协助管理差旅费用，包括预算控制、费用报销等。</li>
            <li>紧急援助：提供紧急支持和解决方案。</li>
          </ul>
        </div>

      </section>

      <section className="services-features">
        <h2>服务特色</h2>
        <ol>
          <li>深入了解客户需求，提供便捷的预订渠道。</li>
          <li>优化行程规划，精选合作伙伴。</li>
          <li>建立明确的费用标准和审批流程，实时监控差旅费用支出。</li>
          <li>提供24小时紧急服务热线，个性化服务，定期评估与改进。</li>
          <li>培训专业团队，关注行业动态，引入新服务理念和技术手段。</li>
        </ol>
      </section>

      <section className="services-packages">
        <h2>服务套餐</h2>
        <div className="package gold-card">
          <div className="package-content">
            <h3>金卡服务：23999/年</h3>
            <ul>
              <li>享受全套出行服务</li>
              <li>每年2次短期车辆托管和1次长期车辆托管</li>
              <li>每月水果礼包1份</li>
              <li>16000元畅霄科技和差旅服务额度</li>
              <li>适用用户：每年出行1-2次的家庭；小微企业</li>
            </ul>
          </div>
          <img src="金卡.png" alt="金卡服务" />
        </div>
        <div className="package platinum-card">
          <div className="package-content">
            <h3>铂金服务：79999/年</h3>
            <ul>
              <li>享受全套出行服务</li>
              <li>每年12次短期车辆托管和3次长期车辆托管</li>
              <li>每月水果礼包5份</li>
              <li>定制专车或包车2次</li>
              <li>国际旅行规划和境外出行咨询服务</li>
              <li>50000元畅霄科技和差旅服务额度</li>
              <li>适用用户：每年出行3-5次的家庭；中小企业</li>
            </ul>
          </div>
          <img src="铂金卡.png" alt="铂金卡服务" />
        </div>
      </section>

      <section className="services-app">
        <div className="app-content">
          <h2>友家APP</h2>
          <p>
            杭州畅霄科技有限公司致力于打造优质生活服务平台，为个人用户和企业用户筛选优质的服务商，并接入公司会员体系。友家APP将于八月初正式上线，涵盖衣食住行等功能，并提供优质的农产品产地直采服务。
          </p>
          <p>
            加入友家APP的品牌方，入驻签约的第一年免除所有入驻费用、手续费及抽成。公司提供全方位技术支持与服务保障。
          </p>
        </div>
        <div className="images-containers">
          <img src="其它会员.png" alt="其它会员权益" />
          <img src="水果礼盒.png" alt="水果礼盒" />
        </div>
      </section>

      <section className="services-example">
        <h2>示例</h2>
        <div className="example-image">
          <img src="方案规划.png" alt="差旅服务示例" />
          <img src="车辆托管.png" alt="差旅服务示例" />
          <img src="示例.png" alt="差旅服务示例" />
          <img src="方案一.png" alt="差旅服务示例" />
          <img src="方案二.png" alt="差旅服务示例" />
          <img src="方案三.png" alt="差旅服务示例" />
        </div>
      </section>
    </div>
  );
}

export default Services;