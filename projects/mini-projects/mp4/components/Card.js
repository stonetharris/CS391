import styled from 'styled-components';

const Info = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    max-width: 300px; 
`;

const Field = styled.p`
    margin: 25px;
    font-size: calc(14px + 0.2vw); 
`;

const Label = styled.span`
    font-weight: bold;
`;

const CardWrapper = styled.div`
    text-align: center;
    padding: 25px;
    background: lightgreen;
    border-radius: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: calc(18px + 0.5vw);
  color: black;
  margin-bottom: 2px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px; 
  height: auto;
  border-radius: 5px;
  margin-top: 2px;
`;

function Card({
                  title,
                  image,
                  instructions,
                  category,
                  alcoholic,
                  glass,
                  ingredient1,
                  ingredient2
              }) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Image src={image} alt={title}/>
            {instructions && <Field><Label>Instructions:</Label> {instructions}</Field>}
            {category && <Field><Label>Category:</Label> {category}</Field>}
            {alcoholic && <Field><Label>Alcoholic:</Label> {alcoholic}</Field>}
            {glass && <Field><Label>Glass:</Label> {glass}</Field>}
            {ingredient1 && <Field><Label>Main Ingredient:</Label> {ingredient1}</Field>}
            {ingredient2 && <Field><Label>Secondary Ingredient:</Label> {ingredient2}</Field>}
        </CardWrapper>
    );
}

export default Card;