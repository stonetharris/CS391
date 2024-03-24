import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import Card from '../../components/Card';

const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function CocktailDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum');
            const { drinks } = await res.json();

            const drink = drinks.find(drink => drink.idDrink === id);
            setCocktail(drink);
            setLoading(false);
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <DetailContainer>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    {cocktail ? (
                        <>
                            <Head>
                                <title>{cocktail.strDrink}</title>
                            </Head>

                            <Card
                                title={cocktail.strDrink}
                                instructions={cocktail.strInstructions}
                                image={cocktail.strDrinkThumb}
                                category={cocktail.strCategory}
                                alcoholic={cocktail.strAlcoholic}
                                glass={cocktail.strGlass}
                                ingredient1={cocktail.strIngredient1}
                                ingredient2={cocktail.strIngredient2}
                            />
                        </>
                    ) : (
                        <span>Cocktail not found</span>
                    )}
                </>
            )}
        </DetailContainer>
    );
}

export default CocktailDetail;
