// define different types of data

export const typeDefs = `#graphql
    type Game{
        id: ID!,
        title: String!, 
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id: ID!,
        rating: Int!,
        content: String!,   
        game: Game!,
        author: Author!
    }
    type Author{
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    # must have query
#     In GraphQL, the Query type serves as the entry point for queries that clients will execute against your API. 
#     Think of it like the public API for your GraphQL service, where you define what data can be read (queried).

# The line books: [Book] within the Query type specifies that there is a query called books that will return an array 
# of Book objects.
    type Query{
        reviews: [Review],
        games: [Game],
        authors: [Author]
        review(id: ID!): Review
        game(id: ID!): Game
        author(id: ID!): Author
    }
    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): Game
    }
    input AddGameInput{
        title: String!,
        platform: [String!]!
    }
`;
// data types int, float, string, boolean, (ID = key for data object)
