import styled from 'styled-components';

const HomePageMainSection = styled.main(({ theme }) => `
  height: calc(100vh - ${theme.navbarHeight}px);
  background-image: url(/assets/main-section-cover.jpg);
  background-size: cover;
  background-position: center;
`);

export default HomePageMainSection;
