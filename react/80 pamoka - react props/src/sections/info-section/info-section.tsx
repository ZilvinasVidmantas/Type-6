import React from 'react';
import InfoSectionCard from './info-section-card';

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  columnGap: 50,
  paddingTop: 60,
  paddingBottom: 60,

};

const InfoSection: React.FC = () => (
  <div style={style}>
    <InfoSectionCard title="About" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
    <InfoSectionCard title="Company" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
    <InfoSectionCard title="Services" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
  </div>
);

export default InfoSection;
