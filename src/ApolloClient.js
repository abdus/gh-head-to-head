import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    'Authorization': 'Bearer <token>'
  } 
})

export default client;