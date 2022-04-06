import React from 'react';
import Container from '../../components/container';
import { InfoSectionWrapper, InfoSectionCard, InfoSectionCardContainer } from './styles';

const infoSectionCardsProps = [
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
  <InfoSectionWrapper>
    <Container>
      <InfoSectionCardContainer>
        {infoSectionCardsProps.map(({ title, paragraphText }) => (
          <InfoSectionCard>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
          </InfoSectionCard>
        ))}
      </InfoSectionCardContainer>
    </Container>
  </InfoSectionWrapper>
);

export default InfoSection;
