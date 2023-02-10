import gql from "graphql-tag";

export const GET_COLLECTION = gql`
  query GET_COLLECTION {
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
