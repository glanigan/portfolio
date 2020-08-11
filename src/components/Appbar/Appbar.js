import styled from 'styled-components';
import React from 'react';

const Container = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 40px;
  padding: 8px 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #222;

  a {
    padding: 0 16px;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
    :hover {
      color: #00aa00;
    }
  }
`;

export default function Appbar() {
  return (
    <Container>
      <nav>
        <a href="#my-work">My Work</a>
        <a href="#about-me">About Me</a>
        <a href="#get-in-touch">Get In Touch</a>
      </nav>
    </Container>
  );
}
