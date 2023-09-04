import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup
const server = new ApolloServer({
  // typeDefs(data types) and resolvers(functions)
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
