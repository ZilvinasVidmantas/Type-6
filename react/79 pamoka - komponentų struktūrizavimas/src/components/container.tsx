import React from 'react';

const style: React.CSSProperties = {
  display: 'block',
  width: '1200px',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  margin: 'auto',
};

/*
  children - tai viskas tarp komponento atidarymo ir uždarymo, pvz.:
  <Container>
    <span>Labas</span>
    <span>vakaras</span>
  </Container>

  children -> <span>Labas</span>
           -> <span>vakaras</span>
*/
const Container: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default Container;
