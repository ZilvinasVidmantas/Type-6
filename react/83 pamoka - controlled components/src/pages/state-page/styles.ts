import styled from 'styled-components';

export const StateManagmentExampleContainer = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const VideoContainer = styled.div`
  flex-grow: 1;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 360px;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 2px 4px 1px #0005;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
