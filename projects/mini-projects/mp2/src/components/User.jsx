import styled from 'styled-components';

const UserCard = styled.div`
    display: inline-block;
    width: calc(100%/6 - 20px);
    margin: 10px;
    padding: 20px;
    text-align: center;
    border: 1px solid #000;
`;

function User({ userData }) {
    const { name, location, login } = userData;
    return (
        <UserCard>
            <p>{`${name.title}. ${name.first} ${name.last}`}</p>
            <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`}/>
            <p>{location.city}, {location.state}</p>
            <p>Username: {login.username}</p>
        </UserCard>
    );
}

export default User;
