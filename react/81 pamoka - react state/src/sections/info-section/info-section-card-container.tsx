import React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
};

const InfoSectionCardContainer: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default InfoSectionCardContainer;
