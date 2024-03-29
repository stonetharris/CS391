import styled from 'styled-components';
import Head from 'next/head';

const HeaderWrapper = styled.div`
    background-color: green;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styled.h1`
    height: 64px;
    pointer-events: none;
`;

function Header() {
    return (
        <>
            <Head>
                <title>Cocktail Explorer</title>
                <meta
                    name='description'
                    content='Explore a variety of cocktails from around the world'
                />
            </Head>
            <HeaderWrapper>
                <Title>Cocktail Explorer</Title>
            </HeaderWrapper>
        </>
    );
}

export default Header;
