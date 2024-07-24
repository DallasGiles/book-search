import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import App from './App';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWrapper;