import React, { useState, useEffect } from 'react';
import User from './User';

function List() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://randomuser.me/api/?results=24');
            const data = await response.json();
            setUsers(data.results);
            setLoading(false);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <div className='row'>
                {loading ? <div>Loading...</div> : users.map((user, index) => <User key={index} userData={user} />)}
            </div>
        </div>
    );
}

export default List;

