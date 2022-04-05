import React from 'react';
import InfoSectionCard, { InfoSectionCardProps } from './info-section-card';

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  columnGap: 50,
  paddingTop: 60,
  paddingBottom: 60,
};

const infoSectionCardsProps: InfoSectionCardProps[] = [
  {
    title: 'About',
    paragraphText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus.',
  },
  {
    title: 'Company',
    paragraphText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus.',
  },
  {
    title: 'Services',
    paragraphText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus.',
  },
];

const InfoSection: React.FC = () => (
  <div style={style}>
    {infoSectionCardsProps.map((props) => <InfoSectionCard {...props} />)}
  </div>
);

export default InfoSection;
