import gql from "graphql-tag";

export default gql`
  query {
    cars(listCarsInput: { limit: 40, offset: 0 }) {
      _id
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
