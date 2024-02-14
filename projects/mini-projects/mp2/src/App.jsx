import React from 'react';
import List from './components/list.jsx'; // Make sure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // If you're using Bootstrap for styling

function App() {
    return (
        <div className='container'>
            <nav className='navbar sticky-top navbar-light bg-light'>
                <h1 className='navbar-brand'>University List</h1>
            </nav>
            <List />
        </div>
    );
}

export default App;
