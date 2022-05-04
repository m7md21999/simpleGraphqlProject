const {gql} = require("apollo-server");

const typeDefs = gql `
    
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie]
    }
    
    type Movie {
        id: ID
        name: String!
        year: Int!
        isInCinema: Boolean!
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = Saudi
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User!
    }
    
    enum Nationality {
        Saudi
        American
        Mexican
        Pakistan
        Canadian
    }
`;

module.exports ={ typeDefs };