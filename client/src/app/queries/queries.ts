import gql from "graphql-tag";

export default gql`
  query {
    cars {
      id
      name
      carLbs
      carRwhp
      dailyRentingPrice
      monthlyRentingPrice
      carPrice
      mileage
      carType
      gearType
      isFeaturedCar
      imageUrl
    }
  }
`;
