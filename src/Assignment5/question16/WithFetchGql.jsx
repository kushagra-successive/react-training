import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { gqluri } from "../data";
const WithFetchGql = (MyComponent) => {
  const EnhnacedComponent = () => {
    const client = new ApolloClient({
      uri: gqluri,
      cache: new InMemoryCache(),
    });
    return (
      <div>
        <ApolloProvider client={client}>
          <MyComponent />
        </ApolloProvider>
      </div>
    );
  };
  return EnhnacedComponent;
};
export default WithFetchGql;
