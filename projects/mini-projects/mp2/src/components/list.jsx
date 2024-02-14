// ... other imports
import University from './university.jsx';
import React, { useState, useEffect } from 'react';

function List() {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://universities.hipolabs.com/search?country=United+States');
            const data = await response.json();
            setUniversities(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Universities</h2>
            <div className='row'>
                {loading ? <div>Loading...</div> : universities.map((uni) => <University key={uni.name} university={uni} />)}
            </div>
        </div>
    );
}

export default List;
