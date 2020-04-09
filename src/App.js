import React from 'react';
import './App.css';

//Import Apollo client Libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


//import our routes
import Pages from './components/pages';

//Configure our API URI and Cache
const uri =  process.env.REACT_APP_URI;
const cache = new InMemoryCache();

//Configure Apollo client
const client = new ApolloClient({
	uri,
	cache,
	connectToDevTools: true
});


const App = () => {
  return (
  	<ApolloProvider client= {client}>
      <Pages />
    </ApolloProvider>
  );
}

export default App;

