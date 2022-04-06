import React from 'react';

const style: React.CSSProperties = {
  height: '100vh',
  backgroundImage: 'url(/assets/main-section-cover.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const MainSection: React.FC = () => (
  <main style={style} />
);

export default MainSection;
