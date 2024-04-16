import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GqlApp from "./GqlApp";
import { gqluri } from "../data";

const client = new ApolloClient({
  uri: gqluri,
  cache: new InMemoryCache(),
});

const GqlIndex = () => {
  return (
    <ApolloProvider client={client}>
      <GqlApp />
    </ApolloProvider>
  );
};

export default GqlIndex;
