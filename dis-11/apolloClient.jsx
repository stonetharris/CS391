// apolloClient.jsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql', // Update the URI to point to your server
    cache: new InMemoryCache(),
});

export default client;
