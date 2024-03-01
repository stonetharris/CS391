import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/react.svg';
// No need for './App.css' if you're using styled-components

function App() {
    return (
        <div className='App'>
            <Header logo={logo} />
            <Routes>
                <Route path='/' element={<Profile userName='stonetharris' />} />
                <Route path='/projects' element={<Projects userName='stonetharris' />} />
                <Route path='/projects/:name' element={<ProjectDetail userName='stonetharris' />} />
            </Routes>
        </div>
    );
}

export default App;
