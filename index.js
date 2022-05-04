const {ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema/type-defes");
const { resolvers } = require("./schema/resolvers");


const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
   console.log("Your server is running :) on " + url);
   console.log(resolvers);
});