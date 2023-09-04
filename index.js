import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    // review(parent=used for relational databse, args object, context=authentication)
    review(_, { id }) {
      return db.reviews.find((review) => review.id === id);
    },
    game(_, { id }) {
      return db.games.find((game) => game.id === id);
    },
    author(_, { id }) {
      return db.authors.find((author) => author.id === id);
    },
  },
  Game: {
    reviews(parent) {
      // parent means games
      // game query and id is the paremeter under game we will fetch review so game is parent. and fetching review
      // id equals to parent meaning game id
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
  },
};

// server setup
const server = new ApolloServer({
  // typeDefs(data types) and resolvers(functions)
  // typedefs definitions of types of data, like author, games, etc the resources we want to query
  typeDefs,
  // resolvers = it will handle the queries
  resolvers,
});

// The startStandaloneServer function is used to start an Apollo Server instance in
//  standalone mode. In this context, "standalone" means that the server doesn't rely
//  on an external HTTP server, like Express, to run. Instead, it manages the HTTP server
//  itself.
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log("Server running on: ", 4000);
