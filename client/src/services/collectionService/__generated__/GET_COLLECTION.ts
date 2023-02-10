/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COLLECTION
// ====================================================

export interface GET_COLLECTION_getCars {
  __typename: "Car";
  id: string;
  name: string;
  carLbs: number;
  carRwhp: number;
  dailyRentingPrice: number;
  monthlyRentingPrice: number;
  carPrice: number;
  mileage: string;
  carType: string;
  gearType: string;
  isFeaturedCar: boolean;
  imageUrl: string;
}

export interface GET_COLLECTION {
  getCars: GET_COLLECTION_getCars[];
}
