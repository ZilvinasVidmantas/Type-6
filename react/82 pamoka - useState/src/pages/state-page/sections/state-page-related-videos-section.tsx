import React from 'react';
import Container from '../../../components/container';
import Section from '../../../components/section';
import { Video, VideoContainer, VideosContainer } from '../styles';

const StatePageRelatedVideosSection: React.FC = () => (
  <Section>
    <Container>
      <h2>Related Videos</h2>
      <VideosContainer>
        <VideoContainer>
          <h3>useState hook</h3>
          <Video
            src="https://www.youtube.com/embed/9xhKH43llhU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>

        <VideoContainer>
          <h3>Controlled components</h3>
          <Video
            src="https://www.youtube.com/embed/IkMND33x0qQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </VideosContainer>
    </Container>
  </Section>
);

export default StatePageRelatedVideosSection;
