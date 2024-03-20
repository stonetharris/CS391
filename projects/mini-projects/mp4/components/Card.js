import styled from 'styled-components';

const CardWrapper = styled.div`
    text-align: left;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
    color: black;
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 5px;
    margin-top: 10px;
`;

const Instructions = styled.p`
    color: darkGray;
    text-align: justify;
    padding: 10px;
`;

function Card({ title, image, instructions }) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Image src={image} alt={title} />
            <Instructions>{instructions}</Instructions>
        </CardWrapper>
    );
}

export default Card;
