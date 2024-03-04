import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';

// Server setup
const server = new ApolloServer({
    typeDefs,
    //resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log('Server is running at port ', 4000);