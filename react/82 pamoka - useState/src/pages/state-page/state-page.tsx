import React, { useState } from 'react';
import Container from '../../components/container';
import {
  StateExampleContainer,
  CounterText,
  VideosContainer,
  VideoContainer,
  Video,
} from './styles';

import Button from '../../components/button';
import Section from '../../components/section';
import Divider from '../../components/divider';

const StatePage: React.FC = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div>
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

          <StateExampleContainer>
            <Button type="button" onClick={() => setCounter(counter + 1)}>Increase state</Button>
            <CounterText>
              <span>Counter: </span>
              <span>{counter}</span>
            </CounterText>
          </StateExampleContainer>
          <Divider />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Controlled components</h2>
          <p>
            Controlled components are such components which view is entangled with state variable. They are used, because sometimes we change state variable and view must re-render automaticly. Also if we change view component, state variable should also change by that changed value. Basically, we use controlled components for inputs, selects, checboxes, radios and custom UI/UX components. This methodology is also known as
            {' '}
            <strong>two-way binding</strong>
          </p>
          <Divider />
        </Container>
      </Section>

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
    </div>
  );
};

export default StatePage;
