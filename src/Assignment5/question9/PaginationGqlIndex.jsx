import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PaginationGqlApp from "./PaginationGqlApp";
import { gqluri } from "../data";

const client = new ApolloClient({
  uri: gqluri,
  cache: new InMemoryCache(),
});

const PaginationGqlIndex = () => {
  return (
    <ApolloProvider client={client}>
      <PaginationGqlApp />
    </ApolloProvider>
  );
};

export default PaginationGqlIndex;
