import React, { useState, useEffect, useCallback } from 'react';
import CoreLayout from '../layouts/CoreLayout';
import Appbar from '../components/Appbar';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  height: calc(100vh-32px);
`;
const skills = ['React', 'Redux', 'Gatsby', 'Lerna'];

export default function Home() {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    if (count + 1 >= skills.length) {
      return setCount(0);
    }
    return setCount((prevState) => {
      return prevState + 1;
    });
  }, [count, setCount]);

  useEffect(() => {
    const interval = setInterval(updateCount, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [updateCount]);

  return (
    <CoreLayout>
      <Section>
        <header>
          <h1>GL</h1>
        </header>
        <h2>
          Hi. I'm Gary; A Javascript developer,
          <br />
          with skills in [ {skills[count]} ];
        </h2>
      </Section>
      <Appbar />
      <div
        id="my-work"
        style={{
          height: '100vh',
          background: '#fff',
        }}
      ></div>
      <div
        id="about-me"
        style={{
          height: '100vh',
        }}
      ></div>
      <div
        id="get-in-touch"
        style={{
          height: '100vh',
          background: '#fff',
        }}
      ></div>
    </CoreLayout>
  );
}
