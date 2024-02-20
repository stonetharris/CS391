import styled from 'styled-components';

const UniversityCard = styled.div`
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: inline-block; 
    width: calc(100%/6 - 20px);
`;

function University({ university }) {
    return (
        <UniversityCard>
            <h3>{university.name}</h3>
            <p>Country: {university.country}</p>
            <p>Domain: {university.domains[0]}</p>
            <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </UniversityCard>
    );
}


export default University;
