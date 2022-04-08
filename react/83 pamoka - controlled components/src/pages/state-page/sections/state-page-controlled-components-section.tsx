import React, { useState } from 'react';
import Container from '../../../components/container';
import Section from '../../../components/section';
import Divider from '../../../components/divider';
import TextField from '../../../components/text-field';

const StatePageControlledComponentsSection: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Section>
      <Container>
        <h2>Controlled components</h2>
        <p>
          Controlled components are such components which view is entangled with state variable. They are used, because sometimes we change state variable and view must re-render automaticly. Also if we change view component, state variable should also change by that changed value. Basically, we use controlled components for inputs, selects, checboxes, radios and custom UI/UX components. This methodology is also known as
          {' '}
          <strong>two-way binding</strong>
        </p>

        <TextField />

        <Divider />
      </Container>
    </Section>
  );
};

export default StatePageControlledComponentsSection;
