const { UsersList , MoviesList } = require("../fake-data");
const _ = require("lodash");


const  resolvers = {
  Query: {

      // Users resolvers:
      users () {
          return UsersList;

      },
      user (parent, args) {
          const id = args.id;
          const user = _.find(UsersList, { id: Number(id) });
          return user;
      },

      // Movies resolvers:
      movies () {
          return MoviesList;
      },
      movie (parent, args) {
          const name = args.name;
          const movie = _.find(MoviesList, { name });
          return movie;
      },
  },

    User: {
        favoriteMovies () {
            return _.filter(MoviesList, (movie) => movie.year >= 2000 && movie.year <= 2010);
        },
    },


    Mutation: {
      createUser(parent, args) {
          const user = args.input;
          const lastID = UsersList[UsersList.length - 1].id;
          user.id = lastID + 1;
          UsersList.push(user);
      },
    }
};

module.exports = { resolvers };