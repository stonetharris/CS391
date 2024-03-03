import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/react.svg';

const AppContainer = styled.div`
    text-align: center;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #aeb6fc; 

    h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
    }

    a {
        color: #0077cc;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

function App() {
    return (
        <AppContainer>
            <Header logo={logo} />
            <Routes>
                <Route path='/' element={<Profile userName='stonetharris' />} />
                <Route path='/projects' element={<Projects userName='stonetharris' />} />
                <Route path='/projects/:name' element={<ProjectDetail userName='stonetharris' />} />
            </Routes>
        </AppContainer>
    );
}

export default App;
