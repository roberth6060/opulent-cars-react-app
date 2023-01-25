import gql from "graphql-tag";

export default gql`
  query {
    cars {
      id
      name
      dailyPrice
      monthlyPrice
      mileage
      gas
      gearType
      url
    }
  }
`;
