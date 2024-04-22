import { useQuery, gql } from "@apollo/client";
const GET_COUNTRIES = gql`
  query Query {
    countries {
      name
      currency
    }
  }
`;
//Creating a schema what do we want from graphql API
const GqlApp = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  return (
    <div>
      <h1>Country Data:</h1>
      {data.countries.slice(0, 10).map((countryData, index) => {
        return (
          <>
            <li key={index}>
              <strong>Name: {countryData.name}</strong>
            </li>
            <li key={index}>Currency: {countryData.currency}</li>
          </>
        );
      })}
    </div>
  );
};

export default GqlApp;
