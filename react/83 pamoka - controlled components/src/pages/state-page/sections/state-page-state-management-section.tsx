import React, { useState } from 'react';
import Button from '../../../components/button';
import Container from '../../../components/container';
import Divider from '../../../components/divider';
import Section from '../../../components/section';
import { CounterText, StateManagmentExampleContainer } from '../styles';

const StatePageStateManagementSection: React.FC = () => {
  const [counter, setCounter] = useState(5);

  return (
    <Section>
      <Container>
        <h1>State management</h1>

        <div>
          <a href="https://reactjs.org/docs/hooks-state.html" target="blank">Documentation</a>
        </div>

        <p>
          State is component variables which are saved between renders. For functional components we have to use
          {' '}
          <strong>useState</strong>
          {' '}
          hook. On first load
          {' '}
          <strong>useState</strong>
          {' '}
          hook saves state variable value as given in the useState invocation. For following renders the value in kept as in initial render. useState hook returns an array tuple with 2 values:
        </p>
        <ul>
          <li>state variable</li>
          <li>dispatch function - to change state variable</li>
        </ul>
        <p>
          After using dispatch function (to change state variable) component automaticly re-renders.
        </p>

        <StateManagmentExampleContainer>
          <Button type="button" onClick={() => setCounter(counter + 1)}>Increase state</Button>
          <CounterText>
            <span>Counter: </span>
            <span>{counter}</span>
          </CounterText>
        </StateManagmentExampleContainer>
      </Container>
    </Section>
  );
};

export default StatePageStateManagementSection;
