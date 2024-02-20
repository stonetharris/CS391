import React from 'react';
import List from './components/list.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // will delete this
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header>Random Users</Header>
            <List />
        </>
    );
}

export default App;
