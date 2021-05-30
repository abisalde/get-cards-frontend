const { ApolloServer } = require('apollo-server');

const typeDefs = `
    type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => `What's going here`,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(`We are live <=====> on ${url}`));
