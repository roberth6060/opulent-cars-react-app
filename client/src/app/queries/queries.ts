import gql from "graphql-tag";

export const GET_CARS = gql`
  query {
    getCars {
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
