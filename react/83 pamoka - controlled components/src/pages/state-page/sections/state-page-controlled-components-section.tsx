import React, { useState } from 'react';
import Container from '../../../components/container';
import Section from '../../../components/section';
import TextField from '../../../components/text-field';
import Button from '../../../components/button';
import { Form } from '../styles';

const StatePageControlledComponentsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    /*
      Atspausdinkite (konsolėje) visų įvesties laukų reikšmes
      Po atspausdinimo, išvalykite visas visas įvesties laukų reikšmes
    */
  };

  return (
    <Section>
      <Container>
        <h2>Controlled components</h2>
        <p>
          Controlled components are such components which view is entangled with state variable. They are used, because sometimes we change state variable and view must re-render automaticly. Also if we change view component, state variable should also change by that changed value. Basically, we use controlled components for inputs, selects, checboxes, radios and custom UI/UX components. This methodology is also known as
          {' '}
          <strong>two-way binding</strong>
        </p>

        <Form onSubmit={handleSubmit}>
          <h3>Registration</h3>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Password confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </Form>

      </Container>
    </Section>
  );
};

export default StatePageControlledComponentsSection;
