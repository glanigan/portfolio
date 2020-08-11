import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 16px;
  }
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  body{
    width: 100vw;
    height: 100vh;

    padding:0;
    margin:0;

    color: #fff;
    background: #222;

    overflow-x:hidden;
  }
  h1{
    font-size: 2.8rem;
  }
  h2{
    font-size: 2.6rem;
    text-align:center;
  }
  button{
    padding: 8px 32px;
    border-radius: 2px;
    border:none;

    color:#44dd66;
    border: solid 3px #44dd66;
    background: none;

    font-size: 1rem;
    font-weight:600;

    transition: border-color .2s, color .2s;
    cursor: pointer;
    :hover{
      color: #66ff88;
      border-color: #66ff88;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  padding: 16px 0;
  margin: 0 auto;
`;

export default function CoreLayout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
