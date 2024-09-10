import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pdf-viewer">
      <h1>用户个人信息保护政策</h1>
      <iframe
        src="/PrivacyPolicy.pdf"  // 这是PDF文件的路径
        width="100%"
        height="800px"
        title="Privacy Policy PDF"
      ></iframe>
    </div>
  );
};

export default PrivacyPolicy;
