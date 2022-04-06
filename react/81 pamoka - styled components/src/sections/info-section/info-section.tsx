import React from 'react';
import InfoSectionCard, { InfoSectionCardProps } from './info-section-card';
import Container from '../../components/container';
import InfoSectionCardContainer from './info-section-card-container';

const style: React.CSSProperties = {
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
    <Container>
      <InfoSectionCardContainer>
        {infoSectionCardsProps.map((props) => <InfoSectionCard {...props} />)}
      </InfoSectionCardContainer>
    </Container>
  </div>
);

export default InfoSection;
