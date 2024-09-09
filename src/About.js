import React, { useState } from 'react';
import './About.css';

const TeamMember =({name,position})=>(
  <div className='team-member'>
      <h3>{name}</h3>
      <p className='position'>{position}</p>
    </div>
);
const About = () => {
  /*定义一个状态来存储当前选中的业务*/
  const[selecteBusiness,setSelectedBusiness] = useState('');

  /*定义业务*/
  const businesDescriptions ={
    '水果直采': '本公司用“互联网+”和“元宇宙”平台的方式助力果蔬销售',
    '3D建模': '本公司拥有3D建模和3D模型制作技术',
    'AI云端助理': '本公司拥有AI大模型云端私人助理',
    '元宇宙': '本公司拥有数字孪生元宇宙平台开发和运营技术'
  };

  return (
    <section className="about-section">
      <div className="container">
        <header className="section-header">
          <h1>关于我们</h1>
          <p>畅霄科技自2024年成立以来，一直致力于提供优质的差旅服务...</p>
          <p>畅霄科技致力于打造年轻学生学者社群，
            用新时代的理念和创新推动产业升级。
            主营业务以3D建模为基础，
            打造数字孪生元宇宙交互平台，
            和定制化模型设计。
            依托互联网+的力量，
            公司同时打造了畅销中国公益项目，
            用业务主线扶持果蔬销售。</p>
        </header>
        
        <div className='company-business-struture'>
          <header className='business-struture'>
            <h2>公司业务架构</h2>
          </header>
          </div>
          <div className='list-ul'>
            <div
              className={`ul-1 ${selecteBusiness === '水果直采' ? 'active' : ''}`}
              onClick={() => setSelectedBusiness('水果直采')}
            >
                <p>水果直采</p>
            </div>
            <div 
              className={`ul-2 ${selecteBusiness === '3D建模' ? 'active' : ''}`} 
              onClick={()=>setSelectedBusiness('3D建模')}>
                <p>3D建模</p>
            </div>
            <div 
              className={`ul-3 ${selecteBusiness === 'AI云端助理' ? 'active' :''}`} 
              onClick={()=>setSelectedBusiness('AI云端助理')}>
              <p>AI云端助理</p>
            </div>
            <div 
              className={`ul-4 ${selecteBusiness === '元宇宙' ? 'active' :''}`}
              onClick={()=>setSelectedBusiness('元宇宙')}>
              <p>元宇宙</p>
            </div>
        </div>


        <div  className='li-mess-box clearfix'>
          {/*只显示当前选中的业务描述*/}
          {
            selecteBusiness &&(
              <div className='mess-text'>{businesDescriptions[selecteBusiness]}</div>
            )}
          {/* <div className='mess-text'>
            本公司用“互联网+”和“元宇宙”平台的方式助力果蔬销售
          </div>
          <div className='mess-text'>
            本公司拥有3D建模和3D模型制作技术
          </div>
          <div className='mess-text'>
            本公司拥有AI大模型云端私人助理
          </div>
          <div className='mess-text'>
            本公司拥有数字孪生元宇宙平台开发和运营技术
          </div> */}
        </div>



        <div className='team-member'>
          <div className='company-logo'>
            <img src={require('./3.jpg')} alt='公司logo'className="logo-image" />
            <p>公司团队成员</p>
          </div>
          <div className='member -row'>
            <TeamMember
              name={"杨子霄"}
              position={"CEO - 创始人-执行董事"}
            />
            <TeamMember
              name="冯畅"
              position="人才和发展管理监事"
            />
            <TeamMember
              name="李翰龙"
              position="移动端软件开发总监"
            />
            <TeamMember
              name="杜昀泽"
              position="企业运营监事"
            /> 
            <TeamMember
              name ="卢小艾"
              position="市场部总监"
            />
            <TeamMember
              name = "付圣耀"
              position="产品经理"
            />
            <TeamMember
              name = "张月"
              position="商务经理"
            />
          </div>
        </div>
        
        <div className="values">
          <h2>我们的价值观</h2>
          <p>客户至上,诚信为本,以最好的服务回归于顾客</p>
        </div>
        
        <div className="partners">
          <h2>合作伙伴</h2>
            <p>京东</p>
          <div className="partner-logos">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2021%2F07%2F0421%2F225621531_9_20210704092742676&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1727606510&t=1c3af10b4140530189c31bb82926657f"
           alt="京东" className="team-image" />
            {/* 客户logo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
