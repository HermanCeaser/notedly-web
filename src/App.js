import React from 'react';
import './App.css';

//Import Apollo client Libraries
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from 'apollo-link-context';


//import our routes
import Pages from './components/pages';

//Configure our API URI and Cache
const uri =  process.env.REACT_APP_URI;
const cache = new InMemoryCache();  
const httpLink = createHttpLink({ uri });

//check for token and return the headers to the context
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers, 
      authorization: token ? token: "",
    }
  }
})

//Configure Apollo client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
  cache,
  resolvers: {},
	connectToDevTools: true
});

//check for Local Token
const data = { isLoggedIn: !!localStorage.getItem('token')};

//write the cache data on Initial load
cache.writeQuery({ 
  query: gql`{
    isLoggedIn @client
  }`,
  data, 
});
console.log(cache)

//write data after cache is reset
client.onResetStore(() => cache.writeQuery({
  query: gql`{
    isLoggedIn @client
  }`,
  data,
}))


const App = () => {
  return (
  	<ApolloProvider client= {client}>
      <Pages />
    </ApolloProvider>
  );
}

export default App;

