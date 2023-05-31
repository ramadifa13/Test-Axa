import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import YourFontTTF from './Assets/font/WorkSans-Light.ttf';
import YourFontTTF2 from './Assets/font/WorkSans-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Font1';
    src: url(${YourFontTTF}) format('truetype');
  }
  @font-face {
    font-family: 'Font2';
    src: url(${YourFontTTF2}) format('truetype');
  }
  body {
    margin: 0;
  font-family: "Font1";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
