import WithFetchGql from "./WithFetchGql";
import { gql, useQuery } from "@apollo/client";
const GET_COUNTRIES = gql`
  query Query {
    countries {
      name
      currency
    }
  }
`;
const ShowData = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Country Data:</h1>
      {data.countries.slice(0, 10).map(({ name, currency, index }) => {
        return (
          <>
            <ul>
              <li key={index}>
                <strong>{name}</strong>
              </li>
              <p>{currency}</p>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default WithFetchGql(ShowData);
