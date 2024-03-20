import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

const CocktailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const CardLink = styled.a`
    text-decoration: none;
`;

export default function CocktailsList({ cocktails }) {
    return (
        <>
            <Head>
                <title>Cocktails</title>
            </Head>
            <CocktailsContainer>
                <h2>Cocktails</h2>
                <div>
                    {cocktails.map((cocktail) => (
                        <Link
                            href={`/questions/${cocktail.idDrink}`}
                            key={cocktail.idDrink}
                            passHref
                        >
                            <CardLink>
                                <Card
                                    key={cocktail.idDrink}
                                    title={cocktail.strDrink}
                                    image={cocktail.strDrinkThumb}
                                    // Include other properties as needed
                                />
                            </CardLink>
                        </Link>
                    ))}
                </div>
            </CocktailsContainer>
        </>
    );
}


export async function getServerSideProps(context) {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum');
    const data = await res.json();

    return {
        props: {
            cocktails: data.drinks,
        },
    };
}