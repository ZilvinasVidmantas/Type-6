import React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const ContentSectionNavItemsContainer: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default ContentSectionNavItemsContainer;
