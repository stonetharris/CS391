import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx';
import Hotels from './pages/Hotels.jsx';
import HotelDetail from './pages/HotelDetail.jsx';
import ReviewForm from './pages/ReviewForm.jsx';
import AppContext from './context/AppContext.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Header />
                    <AppContext>
                        <Routes>
                            <Route path='/' element={<Hotels />} />
                            <Route path='/hotel/:hotelId' element={<HotelDetail />} />
                            <Route path='/hotel/:hotelId/new' element={<ReviewForm />} />
                        </Routes>
                    </AppContext>
                </BrowserRouter>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </AppWrapper>
        </>
    );
}

export default App;
