import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers.graphql.js';
import { typeDefs } from './schema.graphql.js';
import cors from "cors";
// import { PORT } from '../config/config';

const server = new ApolloServer({ typeDefs , resolvers});
const app = express();
app.use(cors())

server.applyMiddleware({ app });

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: 8080 }, () => {
    console.log(`Server is running at http://localhost:8080${server.graphqlPath}`);
});