import React from 'react';

export type InfoSectionCardProps = {
  title: string,
  paragraphText: string,
};

const style: React.CSSProperties = {
  boxShadow: '0 2px 4px #0005',
  width: 300,
  padding: 20,
};

const InfoSectionCard: React.FC<InfoSectionCardProps> = ({ title, paragraphText }) => (
  <div style={style}>
    <h2>{title}</h2>
    <p>{paragraphText}</p>
  </div>
);

export default InfoSectionCard;
