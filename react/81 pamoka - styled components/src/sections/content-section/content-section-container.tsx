import React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  gap: 40,
};

const ContentSectionContainer: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default ContentSectionContainer;
