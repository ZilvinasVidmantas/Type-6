import React, { useState } from 'react';
import Container from '../../../components/container';
import Section from '../../../components/section';
import TextField from '../../../components/text-field';
import Button from '../../../components/button';
import { Form, FormButtonContainer } from '../styles';

const StatePageControlledComponentsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleReset();
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

        <Form onSubmit={handleSubmit} onReset={handleReset}>
          <h3>Registration</h3>
          <TextField
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            name="paswword"
            type="password"
            label="Password confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <FormButtonContainer>
            <Button type="reset">Clear fields</Button>
            <Button type="submit">Register</Button>
          </FormButtonContainer>
        </Form>

      </Container>
    </Section>
  );
};

export default StatePageControlledComponentsSection;
