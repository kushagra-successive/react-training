import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import styles from "../assignment5.module.css";
const GET_COUNTRIES = gql`
  query Query {
    countries {
      name
      currency
    }
  }
`;
const PaginationGqlApp = () => {
  const [index, setIndex] = useState({
    first: 0,
    last: 10,
  });
  const [array, setArray] = useState(new Array(15).fill(""));
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  const SplicedCountries = data.countries.slice(100); //remove from index 0 to 99
  return (
    <div>
      <h1>Country Data:</h1>
      <button
        onClick={() => {
          setIndex({ ...index, last: index.first, first: index.first - 10 });
        }}
      >
        PREV
      </button>
      <button
        onClick={() => {
          setIndex({ ...index, first: index.last, last: index.last + 10 });
        }}
      >
        NEXT
      </button>

      {SplicedCountries.slice(index.first, index.last).map(
        (countryData, index) => {
          return (
            <>
              <li key={index}>
                <strong>Name: {countryData.name}</strong>
              </li>
              <li key={index}>Currency: {countryData.currency}</li>
            </>
          );
        }
      )}
      <br />
      <br />
      <div className={styles.divv}>
        {array.map((element, indices) => (
          <button
            onClick={() =>
              setIndex({
                ...index,
                first: (indices + 1) * 10 - 10,
                last: (indices + 1) * 10,
              })
            }
            className={`${styles.buttons} ${
              index.last / 10 - 1 === indices ? styles.color : " "
            }`}
          >
            {indices + 1}
          </button>
        ))}
      </div>
      <h1>{SplicedCountries.length - index.last}</h1>
    </div>
  );
};

export default PaginationGqlApp;
