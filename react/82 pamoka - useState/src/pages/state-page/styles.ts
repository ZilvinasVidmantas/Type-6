import styled from 'styled-components';

export const StateExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const CounterText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const VideosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const VideoContainer = styled.div`
  flex-grow: 1;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 360px;
`;
